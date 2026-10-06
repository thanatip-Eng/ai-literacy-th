#!/usr/bin/env node
/* Export every string the result page shows, as a CSV the owner can edit.
 *
 * The content.txt format (export-content.js) only covers levels, lang and the
 * answer scale — the result page now draws from blocks that format has no
 * grammar for (outsideView, reflectPrompts, fieldVerdict, disciplineAdvice).
 * This writes a flat sheet instead: one row per string, with the path used to
 * write it back, so edits can be applied by copy-script-apply.js without
 * anyone touching the JS.
 *
 * Usage: node tools/copy-script-export.js [outfile.csv]
 */
const fs = require('fs');
const path = require('path');
const content = require('../content/app-content');

const rows = [];
const missing = [];

function push(section, where, refPath, th, en) {
  if (typeof th !== 'string') { missing.push(refPath); return; }
  rows.push({section, where, refPath, th, en: typeof en === 'string' ? en : ''});
}

function lang(section, where, key) {
  push(section, where, `lang.${key}`, content.lang.th[key], content.lang.en[key]);
}

function pair(section, where, refPath, obj) {
  if (!obj) { missing.push(refPath); return; }
  push(section, where, refPath, obj.th, obj.en);
}

/* ---- 1. the quadrant card at the top ---- */
for (const [key, q] of Object.entries(content.partnership.quadrants)) {
  pair('1 การ์ดรูปแบบการใช้ AI', `${key} — ชื่อรูปแบบ`, `quadrants.${key}.name`, q.name);
  pair('1 การ์ดรูปแบบการใช้ AI', `${key} — บรรทัดสรุปสั้น`, `quadrants.${key}.short`, q.short);
  pair('1 การ์ดรูปแบบการใช้ AI', `${key} — คำโปรย`, `quadrants.${key}.blurb`, q.blurb);
  pair('1 การ์ดรูปแบบการใช้ AI', `${key} — ประโยคกระตุ้น`, `quadrants.${key}.nudge`, q.nudge);
}

/* ---- 2. the three-line insight strip ---- */
[['insightHead', 'หัวข้อ'],
 ['partnershipStrengthLabel', 'ป้าย "จุดแข็ง"'],
 ['partnershipGapLabel', 'ป้าย "จุดที่ฉุด"'],
 ['firstStepLabel', 'ป้าย "ก้าวแรก"'],
 ['disciplineInsightLabel', 'ป้าย "สาขาของคุณ"']
].forEach(([key, where]) => lang('2 สรุป 3 บรรทัด', where, key));

/* ---- 3. if AI were switched off ---- */
[['withoutAiHead', 'หัวข้อ'],
 ['withoutAiIntro', 'คำอธิบายใต้หัวข้อ'],
 ['withoutAiLow', 'ข้อความเมื่อคะแนนต่ำ (<40)'],
 ['withoutAiMid', 'ข้อความเมื่อคะแนนกลาง (40–69)'],
 ['withoutAiHigh', 'ข้อความเมื่อคะแนนสูง (70+)']
].forEach(([key, where]) => lang('3 การ์ด "ถ้าวันนี้ไม่มี AI"', where, key));

/* ---- 4. the field scenario card ---- */
lang('4 การ์ด "สถานการณ์ในสายของคุณ"', 'หัวข้อ', 'fieldCheckHead');
lang('4 การ์ด "สถานการณ์ในสายของคุณ"', 'ป้ายคะแนน', 'fieldCheckScoreLabel');
for (const d of content.disciplines) {
  const verdict = content.fieldVerdict[d.code] || {};
  pair('4 การ์ด "สถานการณ์ในสายของคุณ"', `${d.label.th} — คะแนนสูง (60+)`,
    `fieldVerdict.${d.code}.high`, verdict.high);
  pair('4 การ์ด "สถานการณ์ในสายของคุณ"', `${d.label.th} — คะแนนต่ำ (<60)`,
    `fieldVerdict.${d.code}.low`, verdict.low);
}

/* ---- 5. what other people see ---- */
[['outsideViewHead', 'หัวข้อ'],
 ['outsideViewIntro', 'คำอธิบายใต้หัวข้อ'],
 ['outsideExamLabel', 'ป้าย "ในห้องสอบ"'],
 ['outsideTeacherLabel', 'ป้าย "ในสายตาอาจารย์"'],
 ['outsideHiringLabel', 'ป้าย "ตอนสมัครงาน"']
].forEach(([key, where]) => lang('5 การ์ด "คนอื่นเห็นอะไร"', where, key));
const TIER_LABEL = {low: 'คะแนนต่ำ (<40)', mid: 'คะแนนกลาง (40–69)', high: 'คะแนนสูง (70+)'};
const ROW_LABEL = {exam: 'ในห้องสอบ', teacher: 'ในสายตาอาจารย์', hiring: 'ตอนสมัครงาน'};
for (const [tier, block] of Object.entries(content.outsideView)) {
  for (const [row, text] of Object.entries(block)) {
    pair('5 การ์ด "คนอื่นเห็นอะไร"', `${TIER_LABEL[tier]} — ${ROW_LABEL[row]}`,
      `outsideView.${tier}.${row}`, text);
  }
}
lang('5 การ์ด "คนอื่นเห็นอะไร"', 'แถบอ้างอิงงานวิจัย', 'evidenceLine');
lang('5 การ์ด "คนอื่นเห็นอะไร"', 'ลิงก์ไปหน้าความรู้', 'evidenceLink');

/* ---- 6. the reflection card ---- */
[['reflectHead', 'หัวข้อ'],
 ['reflectIntro', 'คำอธิบายใต้หัวข้อ'],
 ['reflectCopy', 'ปุ่มคัดลอก'],
 ['reflectCopied', 'ข้อความหลังคัดลอก'],
 ['reflectOpen', 'ปุ่มเข้าแบบสะท้อนคิด']
].forEach(([key, where]) => lang('6 การ์ดคำถามสะท้อนคิด', where, key));
const PROMPT_LABEL = {
  selfReliance: 'ใช้เมื่อ "ทำเองได้เมื่อไม่มี AI" ต่ำ',
  selfTrust: 'ใช้เมื่อ "เชื่อตัวเอง" ต่ำ',
  verify: 'ใช้เมื่อ "ตรวจสอบและรับผิดชอบ" ต่ำ',
  effort: 'ใช้เมื่อ "ยอมลำบาก" ต่ำ',
  strong: 'ใช้เมื่อไม่มีด้านไหนต่ำ',
  always: 'ข้อปิดท้าย ทุกคนได้ข้อนี้'
};
for (const [key, text] of Object.entries(content.reflectPrompts)) {
  pair('6 การ์ดคำถามสะท้อนคิด', PROMPT_LABEL[key] || key, `reflectPrompts.${key}`, text);
}

/* ---- 7. send + receipt ---- */
[['submitCtaHint', 'ข้อความเหนือปุ่มส่ง'],
 ['submitCtaBtn', 'ปุ่มส่งผลให้ผู้สอน'],
 ['receiptHead', 'หัวข้อกล่องยืนยัน'],
 ['receiptWhoLabel', 'ป้าย "ผู้ส่ง"'],
 ['receiptTimeLabel', 'ป้าย "เวลา"'],
 ['receiptCodeLabel', 'ป้าย "รหัสยืนยัน"'],
 ['receiptGraded', 'บรรทัดยืนยันคะแนนใน Canvas'],
 ['receiptReflectHint', 'ข้อความชวนไปทำงานสะท้อนคิด'],
 ['receiptHint', 'บรรทัดชวนแคปหน้าจอ'],
 ['receiptDownloadBtn', 'ปุ่มดาวน์โหลดภาพยืนยัน'],
 ['downloadBtn', 'ปุ่มดาวน์โหลดภาพผล'],
 ['restartBtn', 'ปุ่มทำใหม่']
].forEach(([key, where]) => lang('7 ส่งผล + รหัสยืนยัน', where, key));

/* ---- 8. the required feedback box ---- */
[['mfbHeadConnect', 'หัวข้อ (ฝั่ง Canvas)'],
 ['mfbQ1', 'คำถามดาวข้อ 1'],
 ['mfbQ2', 'คำถามดาวข้อ 2'],
 ['mfbQ3', 'คำถามดาวข้อ 3'],
 ['mfbQ4', 'คำถามปลายเปิด'],
 ['mfbNotePh', 'ข้อความในช่องเขียน'],
 ['mfbGateHint', 'ข้อความเตือนว่ายังกดส่งไม่ได้'],
 ['mfbPrivacyConnect', 'บรรทัดความเป็นส่วนตัว'],
 ['mfbThanks', 'ข้อความขอบคุณ']
].forEach(([key, where]) => lang('8 กล่องให้คะแนนก่อนส่ง', where, key));

/* ---- 9. the score section ---- */
[['accScoresHead', 'หัวข้อส่วนที่พับ'],
 ['partnershipSub', 'บรรทัดอธิบายสองแกน'],
 ['profileHead', 'หัวข้อแถบทักษะ'],
 ['partnershipHead', 'หัวข้อแถบความสัมพันธ์'],
 ['partnershipDetailToggle', 'ปุ่ม "ดูรายด้าน"'],
 ['partnershipDetailNote', 'บรรทัดบอกว่าอีก 3 ด้านอยู่ด้านบน']
].forEach(([key, where]) => lang('9 ส่วนคะแนนละเอียด', where, key));
for (const g of content.partnershipGroups) {
  pair('9 ส่วนคะแนนละเอียด', `ชื่อกลุ่ม: ${g.key}`, `partnershipGroups.${g.key}.name`, g.name);
}
for (const sub of content.partnership.subtraits) {
  pair('9 ส่วนคะแนนละเอียด', `ชื่อด้าน: ${sub.key}`, `subtraits.${sub.key}.name`, sub.name);
  pair('9 ส่วนคะแนนละเอียด', `คำอธิบายด้าน: ${sub.key}`, `subtraits.${sub.key}.desc`, sub.desc);
}

/* ---- 10. per-field advice (longest block; left last on purpose) ---- */
lang('10 คำแนะนำตามสาย', 'หัวข้อ', 'disciplineAdviceHead');
lang('10 คำแนะนำตามสาย', 'คำอธิบายใต้หัวข้อ', 'disciplineAdviceIntro');
for (const d of content.disciplines) {
  const byQuadrant = content.disciplineAdvice[d.code] || {};
  for (const [quadrant, block] of Object.entries(byQuadrant)) {
    const who = `${d.label.th} × ${quadrant}`;
    pair('10 คำแนะนำตามสาย', `${who} — ประโยคหลัก`,
      `disciplineAdvice.${d.code}.${quadrant}.focus`, block.focus);
    (block.steps || []).forEach((step, i) => {
      pair('10 คำแนะนำตามสาย', `${who} — ข้อแนะนำที่ ${i + 1}`,
        `disciplineAdvice.${d.code}.${quadrant}.steps.${i}`, step);
    });
  }
}

/* ---- CSV ---- */
function cell(value) {
  const text = String(value == null ? '' : value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const header = ['ส่วน', 'แสดงตรงไหน', 'รหัสอ้างอิง (ห้ามแก้)', 'ข้อความปัจจุบัน (ไทย)',
  'แก้เป็น (ไทย)', 'ข้อความปัจจุบัน (อังกฤษ)', 'แก้เป็น (อังกฤษ)'];
const lines = [header.map(cell).join(',')];
for (const row of rows) {
  lines.push([row.section, row.where, row.refPath, row.th, '', row.en, ''].map(cell).join(','));
}

const outPath = process.argv[2] || path.join(__dirname, '..', 'copy-script.csv');
fs.writeFileSync(outPath, '﻿' + lines.join('\n'), 'utf8');
console.log(`Wrote ${rows.length} strings to ${outPath}`);
if (missing.length) {
  console.error(`Missing (not exported): ${missing.join(', ')}`);
  process.exitCode = 1;
}
