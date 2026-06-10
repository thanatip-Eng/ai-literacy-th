#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {loadContent, writeContent} = require('./content-lib');

const ROOT = path.resolve(__dirname, '..');
const textPath = path.join(ROOT, 'content.txt');
const content = loadContent();
const lines = fs.readFileSync(textPath, 'utf8').split(/\r?\n/);
const keyPattern = /^([A-Za-z][A-Za-z0-9_]*)(?:\[(\d+)\])?\.(th|en):\s?(.*)$/;
let section = null;
let applied = 0;
const errors = [];

function setBilingual(target, lang, value, label) {
  if (!target || typeof target !== 'object' || typeof target[lang] !== 'string') {
    errors.push(`Unknown field: ${label}.${lang}`);
    return;
  }
  target[lang] = value;
  applied++;
}

for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
  const line = lines[lineNumber].replace(/\s+$/, '');
  if (!line || line.startsWith('#')) continue;

  const levelSection = line.match(/^=== LEVEL (\d+) ===$/);
  if (levelSection) {
    const level = content.levels.find(item => item.n === Number(levelSection[1]));
    if (!level) errors.push(`Line ${lineNumber + 1}: unknown level ${levelSection[1]}`);
    section = {type: 'level', level};
    continue;
  }
  if (line === '=== UI STRINGS ===') {
    section = {type: 'ui'};
    continue;
  }
  if (line === '=== ANSWER SCALE ===') {
    section = {type: 'scale'};
    continue;
  }
  if (line.startsWith('---')) continue;

  const match = line.match(keyPattern);
  if (!match) {
    errors.push(`Line ${lineNumber + 1}: malformed content line`);
    continue;
  }
  if (!section) {
    errors.push(`Line ${lineNumber + 1}: content appears before a section`);
    continue;
  }

  const [, key, indexText, lang, value] = match;
  const oneBasedIndex = indexText ? Number(indexText) : null;

  if (section.type === 'scale') {
    const scaleKey = key.match(/^opt([1-5])(sub)?$/);
    if (!scaleKey || oneBasedIndex !== null) {
      errors.push(`Line ${lineNumber + 1}: unknown answer scale key ${key}`);
      continue;
    }
    const choice = content.scale[Number(scaleKey[1]) - 1];
    const field = scaleKey[2] ? 'sub' : 'lab';
    setBilingual(choice[field], lang, value, key);
    continue;
  }

  if (section.type === 'ui') {
    const target = content.lang[lang][key];
    if (oneBasedIndex !== null) {
      if (!Array.isArray(target) || oneBasedIndex < 1 || oneBasedIndex > target.length) {
        errors.push(`Line ${lineNumber + 1}: unknown UI array item ${key}[${oneBasedIndex}]`);
      } else {
        target[oneBasedIndex - 1] = value;
        applied++;
      }
    } else if (typeof target === 'string') {
      content.lang[lang][key] = value;
      applied++;
    } else {
      errors.push(`Line ${lineNumber + 1}: unknown UI key ${key}`);
    }
    continue;
  }

  const level = section.level;
  if (!level) continue;
  const directFields = new Set(['name', 'short', 'desc', 'blurb', 'nextH']);
  if (directFields.has(key) && oneBasedIndex === null) {
    setBilingual(level[key], lang, value, key);
    continue;
  }

  const indexed = key.match(/^(q|next|ws)(\d+)$/);
  if (!indexed || oneBasedIndex !== null) {
    errors.push(`Line ${lineNumber + 1}: unknown level key ${key}`);
    continue;
  }
  const collection = {q: 'items', next: 'next', ws: 'workshops'}[indexed[1]];
  const index = Number(indexed[2]) - 1;
  if (!level[collection][index]) {
    errors.push(`Line ${lineNumber + 1}: unknown ${key}`);
    continue;
  }
  setBilingual(level[collection][index], lang, value, key);
}

if (errors.length) {
  console.error(`No files changed. Fix these errors:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

writeContent(content);
console.log(`Applied ${applied} values to content/app-content.js.`);
