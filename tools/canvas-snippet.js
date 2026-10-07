#!/usr/bin/env node
/* Build the Canvas-pasteable version of assignment.html.
 *
 * Canvas's rich content editor keeps inline style attributes but throws away
 * <style> blocks, <script>, and anything CSS-only — so ::before circles and a
 * language toggle cannot survive. This emits the same content as flat HTML
 * with every rule inlined, numbers as real elements, and the two languages as
 * two separate blocks to copy.
 *
 * Reads content/assignment-copy.js, the same file the page loads, so there is
 * one source of truth: re-run this after editing the copy.
 *
 * Usage: node tools/canvas-snippet.js [outfile.html]
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const L = require('../content/assignment-copy.js');

/* Canvas renders in its own font stack, so these only set colour and weight. */
const C = {
  ink: '#211C16', muted: '#736A5C', line: '#DCD3C2', card: '#FCFAF5',
  paper2: '#ECE5D7', teal: '#0E6E63', tealDeep: '#0A4F47',
  amber: '#D9852A', amberSoft: '#FFF1D5', warn: '#B5642A'
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* {ui:…} marks a word the student has to find on screen; <b> is authored. */
function rich(text) {
  return esc(text)
    .replace(/\{ui:([^}]+)\}/g,
      `<span style="background:${C.paper2};border:1px solid ${C.line};border-radius:6px;padding:1px 6px;font-weight:600">$1</span>`)
    .replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');
}

const P = `margin:0 0 7px;line-height:1.65`;

function step(n, s, t) {
  const bits = [];
  bits.push(`<p style="${P};font-weight:700;font-size:1.02em">${rich(s.h)}</p>`);
  if (s.p) bits.push(`<p style="${P}">${rich(s.p)}</p>`);
  if (s.p2) bits.push(`<p style="${P}">${rich(s.p2)}</p>`);
  if (s.chips) {
    bits.push('<p style="margin:0 0 7px">' + s.chips.map(c =>
      `<span style="display:inline-block;background:${C.paper2};border:1px solid ${C.line};border-radius:999px;padding:3px 10px;margin:0 4px 4px 0;font-size:.9em">${esc(c)}</span>`
    ).join('') + '</p>');
  }
  if (s.list) {
    bits.push('<ul style="margin:0 0 7px;padding-left:20px">' +
      s.list.map(i => `<li style="line-height:1.7;margin-bottom:4px">${esc(i)}</li>`).join('') + '</ul>');
  }
  if (s.bigq) {
    bits.push(
      `<div style="background:${C.tealDeep};border-radius:12px;padding:16px 18px;margin:10px 0 7px">` +
      `<p style="margin:0 0 6px;color:#fff;opacity:.75;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;font-weight:600">${esc(t.bigqLabel)}</p>` +
      `<p style="margin:0 0 9px;color:#fff;font-weight:700;font-size:1.06em;line-height:1.5">&ldquo;${esc(t.bigqQ)}&rdquo;</p>` +
      `<p style="margin:0;color:#fff;line-height:1.65;font-size:.95em">${esc(t.bigqHow)}</p></div>`);
  }
  /* Where a screenshot goes. Only this build renders it — assignment.html reads
     the same copy and ignores `shot`, so students never see an empty frame.
     No border-radius:50% in here: the step circles are counted by a test. */
  if (s.shot) {
    bits.push(
      `<div style="border:2px dashed ${C.amber};border-radius:10px;background:${C.amberSoft};` +
      `padding:18px 16px;margin:10px 0 7px;text-align:center">` +
      `<p style="margin:0 0 4px;color:${C.warn};font-weight:700;font-size:.9em">` +
      `&#128247; ${esc(t.shotLabel)}</p>` +
      `<p style="margin:0;color:${C.warn};font-size:.9em;line-height:1.5">${esc(s.shot)}</p></div>`);
  }
  if (s.note) bits.push(`<p style="${P};color:${C.muted};font-size:.95em">${rich(s.note)}</p>`);
  if (s.warn) bits.push(
    `<p style="margin:9px 0 0;background:${C.amberSoft};border-radius:8px;padding:9px 11px;color:${C.warn};line-height:1.6;font-size:.95em">&#9888;&#65039; ${rich(s.warn)}</p>`);

  /* a table, not a flex row: it is the layout Canvas is least likely to touch */
  return `<table style="width:100%;border-collapse:collapse;margin:0 0 12px"><tbody><tr>` +
    `<td style="width:42px;vertical-align:top;padding:0 12px 0 0">` +
    `<div style="width:30px;height:30px;border-radius:50%;background:${C.teal};color:#fff;` +
    `text-align:center;line-height:30px;font-weight:700">${n}</div></td>` +
    `<td style="vertical-align:top;background:${C.card};border:1px solid ${C.line};` +
    `border-radius:12px;padding:13px 15px">${bits.join('')}</td></tr></tbody></table>`;
}

function block(t) {
  const out = [];
  out.push(`<div style="color:${C.ink};max-width:780px">`);
  out.push(`<h2 style="margin:0 0 8px">${esc(t.title)}</h2>`);
  out.push(`<p style="${P};color:${C.muted}">${esc(t.lead)}</p>`);

  for (const [tag, head, time] of [[t.half1Tag, t.half1Head, t.half1Time],
                                   [t.half2Tag, t.half2Head, t.half2Time]]) {
    out.push(`<div style="background:${C.card};border:1px solid ${C.line};border-radius:12px;` +
      `padding:12px 15px;margin:0 0 8px">` +
      `<p style="margin:0 0 2px;color:${C.teal};font-weight:700;font-size:.8em;text-transform:uppercase;letter-spacing:.06em">${esc(tag)}</p>` +
      `<p style="margin:0 0 2px;font-weight:700">${esc(head)}</p>` +
      `<p style="margin:0;color:${C.muted};font-size:.92em">${esc(time)}</p></div>`);
  }

  out.push(`<div style="background:${C.amberSoft};border-left:4px solid ${C.amber};` +
    `border-radius:10px;padding:14px 16px;margin:14px 0 22px">` +
    `<p style="margin:0 0 7px;font-weight:700;color:${C.warn}">${esc(t.gradeHead)}</p>` +
    [t.grade1, t.grade2, t.grade3].map(x => `<p style="${P}">${esc(x)}</p>`).join('') +
    `</div>`);

  let n = 1;
  for (const [head, sub, steps] of [[t.phase1Head, t.phase1Sub, t.steps1],
                                    [t.phase2Head, t.phase2Sub, t.steps2]]) {
    out.push(`<h3 style="margin:24px 0 2px;color:${C.tealDeep}">${esc(head)}</h3>`);
    out.push(`<p style="margin:0 0 14px;color:${C.muted};font-size:.95em">${esc(sub)}</p>`);
    for (const s of steps) out.push(step(n++, s, t));
  }

  out.push(`<h3 style="margin:24px 0 10px;color:${C.tealDeep}">${esc(t.troubleHead)}</h3>`);
  out.push(`<table style="width:100%;border-collapse:collapse"><tbody>` +
    `<tr><th style="text-align:left;padding:0 10px 7px 0;border-bottom:2px solid ${C.line};` +
    `color:${C.muted};font-size:.9em">${esc(t.troubleCol1)}</th>` +
    `<th style="text-align:left;padding:0 0 7px 0;border-bottom:2px solid ${C.line};` +
    `color:${C.muted};font-size:.9em">${esc(t.troubleCol2)}</th></tr>` +
    t.trouble.map(([a, b]) =>
      `<tr><td style="padding:9px 10px 9px 0;border-bottom:1px solid ${C.line};vertical-align:top;line-height:1.55">${esc(a)}</td>` +
      `<td style="padding:9px 0;border-bottom:1px solid ${C.line};vertical-align:top;line-height:1.55">${esc(b)}</td></tr>`
    ).join('') + `</tbody></table>`);

  out.push(`<p style="margin:18px 0 0;color:${C.muted};font-size:.92em;line-height:1.7">${esc(t.footNote)}</p>`);
  out.push('</div>');
  return out.join('\n');
}

const thBlock = block(L.th);
const enBlock = block(L.en);

const file = `<!DOCTYPE html>
<meta charset="UTF-8">
<title>AiStyle — HTML สำหรับวางใน Canvas</title>
<body style="font-family:sans-serif;margin:0;padding:24px;background:#F3EEE4">
<div style="max-width:820px;margin:0 auto">
<h1 style="margin:0 0 6px">HTML สำหรับวางใน Canvas</h1>
<p style="margin:0 0 4px;color:#736A5C;line-height:1.6">
ใน Canvas เปิด assignment &rarr; Edit &rarr; ในกล่องเขียนข้อความกดปุ่ม
<b>&lt;/&gt;</b> (HTML Editor) ที่มุมขวาล่าง แล้ววางโค้ดในกรอบด้านล่างลงไป &rarr; Save
</p>
<p style="margin:0 0 10px;color:#B5642A;line-height:1.6">
สร้างจาก assignment.html &mdash; ถ้าแก้ข้อความในหน้านั้น ให้สั่ง
<code>node tools/canvas-snippet.js</code> ใหม่ ไม่ต้องแก้ไฟล์นี้ด้วยมือ
</p>
<p style="margin:0 0 22px;color:#0A4F47;line-height:1.6">
📷 <b>กรอบเส้นประสีส้ม</b> คือจุดที่ควรใส่รูปหน้าจอ &mdash; หลังวางลง Canvas แล้ว
คลิกในกรอบ กด <b>Insert &rarr; Image</b> แล้วลบข้อความในกรอบทิ้ง
</p>

<h2 style="margin:0 0 8px">ฉบับภาษาไทย &mdash; คัดลอกทั้งกล่อง</h2>
<textarea readonly style="width:100%;height:260px;font-family:monospace;font-size:12px;padding:10px;border:1px solid #DCD3C2;border-radius:10px">${thBlock.replace(/</g, '&lt;')}</textarea>
<h3 style="margin:18px 0 8px;color:#736A5C">ตัวอย่างที่จะได้</h3>
<div style="background:#fff;border:1px solid #DCD3C2;border-radius:12px;padding:20px;margin:0 0 34px">
${thBlock}
</div>

<h2 style="margin:0 0 8px">English version &mdash; copy the whole box</h2>
<textarea readonly style="width:100%;height:260px;font-family:monospace;font-size:12px;padding:10px;border:1px solid #DCD3C2;border-radius:10px">${enBlock.replace(/</g, '&lt;')}</textarea>
<h3 style="margin:18px 0 8px;color:#736A5C">Preview</h3>
<div style="background:#fff;border:1px solid #DCD3C2;border-radius:12px;padding:20px">
${enBlock}
</div>
</div>
</body>
`;

const out = process.argv[2] || path.join(root, 'docs', 'canvas-paste.html');
fs.writeFileSync(out, file, 'utf8');
console.log(`Wrote ${out}`);
console.log(`  Thai block    ${thBlock.length} chars`);
console.log(`  English block ${enBlock.length} chars`);
console.log('  no <script>, no <style>, no CSS classes — inline styles only');
