#!/usr/bin/env node
/* Apply the edited copy script back into content/app-content.js.
 *
 * Reads the CSV produced by copy-script-export.js (after someone has filled in
 * the "แก้เป็น" column), and writes each non-empty edit to the path named in
 * the reference column. Rows left blank are untouched, so a half-finished
 * sheet is safe to apply.
 *
 * Usage: node tools/copy-script-apply.js edited.csv [--dry]
 */
const fs = require('fs');
const {loadContent, validateContent, CONTENT_PATH} = require('./content-lib');

const file = process.argv[2];
const dryRun = process.argv.includes('--dry');
if (!file) {
  console.error('Usage: node tools/copy-script-apply.js edited.csv [--dry]');
  process.exit(1);
}

/* --- minimal RFC4180 parser: the sheet round-trips quotes and newlines --- */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += ch;
      continue;
    }
    if (ch === '"') { quoted = true; continue; }
    if (ch === ',') { row.push(field); field = ''; continue; }
    if (ch === '\r') continue;
    if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; continue; }
    field += ch;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/* --- where each reference path writes to --- */
function resolve(content, refPath) {
  const parts = refPath.split('.');
  const head = parts[0];

  if (head === 'lang') {
    const key = parts[1];
    if (typeof content.lang.th[key] !== 'string') return null;
    return {get: () => content.lang.th[key], set: v => { content.lang.th[key] = v; }};
  }
  if (head === 'quadrants') {
    const q = content.partnership.quadrants[parts[1]];
    const field = q && q[parts[2]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'subtraits') {
    const sub = content.partnership.subtraits.find(s => s.key === parts[1]);
    const field = sub && sub[parts[2]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'partnershipGroups') {
    const group = (content.partnershipGroups || []).find(g => g.key === parts[1]);
    const field = group && group[parts[2]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'outsideView') {
    const field = content.outsideView[parts[1]] && content.outsideView[parts[1]][parts[2]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'reflectPrompts') {
    const field = content.reflectPrompts[parts[1]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'fieldVerdict') {
    const field = content.fieldVerdict[parts[1]] && content.fieldVerdict[parts[1]][parts[2]];
    if (!field || typeof field.th !== 'string') return null;
    return {get: () => field.th, set: v => { field.th = v; }};
  }
  if (head === 'disciplineAdvice') {
    const block = content.disciplineAdvice[parts[1]] && content.disciplineAdvice[parts[1]][parts[2]];
    if (!block) return null;
    if (parts[3] === 'focus') {
      return {get: () => block.focus.th, set: v => { block.focus.th = v; }};
    }
    if (parts[3] === 'steps') {
      const step = block.steps[Number(parts[4])];
      if (!step) return null;
      return {get: () => step.th, set: v => { step.th = v; }};
    }
  }
  return null;
}

function main() {
const rows = parseCsv(fs.readFileSync(file, 'utf8').replace(/^﻿/, ''));
const content = loadContent();
const applied = [];
const skipped = [];

for (const row of rows) {
  const [, , refPath, current, edited] = row;
  if (!refPath || refPath === 'รหัสอ้างอิง (ห้ามแก้)' || refPath.startsWith('ห้ามแก้')) continue;
  const next = (edited || '').trim();
  if (!next) continue;
  const target = resolve(content, refPath.trim());
  if (!target) { skipped.push(`${refPath} — unknown path`); continue; }
  if (target.get() === next) continue;         // already says that
  applied.push({refPath, before: target.get(), after: next, drifted: target.get() !== (current || '').trim()});
  target.set(next);
}

for (const entry of applied) {
  console.log(`${entry.drifted ? '!' : '·'} ${entry.refPath}`);
  console.log(`   เดิม: ${entry.before}`);
  console.log(`   ใหม่: ${entry.after}`);
}
if (applied.some(e => e.drifted)) {
  console.log('\n! = the sheet\'s "current" column no longer matches the file — check that row before trusting it');
}
if (skipped.length) {
  console.error(`\nSkipped ${skipped.length} row(s):\n- ${skipped.join('\n- ')}`);
}
if (dryRun) {
  console.log(`\nDry run — nothing written. ${applied.length} edit(s) would apply.`);
  return;
}

/* Replace the strings in place rather than re-serializing the whole file:
   app-content.js is hand-formatted, and a JSON rewrite would turn one edited
   sentence into a 1,500-line diff nobody can review. */
function jsString(value) {
  return JSON.stringify(value);
}

let source = fs.readFileSync(CONTENT_PATH, 'utf8');
const failed = [];
for (const entry of applied) {
  const needle = jsString(entry.before);
  const hits = source.split(needle).length - 1;
  if (hits !== 1) { failed.push(`${entry.refPath} — found ${hits} matches, expected 1`); continue; }
  source = source.replace(needle, jsString(entry.after));
}
if (failed.length) {
  console.error(`\nNo file changed. Fix these first:\n- ${failed.join('\n- ')}`);
  process.exit(1);
}
fs.writeFileSync(CONTENT_PATH, source);

delete require.cache[require.resolve(CONTENT_PATH)];
const errors = validateContent(require(CONTENT_PATH));
if (errors.length) {
  console.error(`\nWritten, but content is now invalid:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`\nApplied ${applied.length} edit(s) to content/app-content.js.`);
console.log('English strings for edited rows still need updating — run npm test, then review.');

}

main();
