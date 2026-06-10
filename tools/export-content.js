#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {loadContent, validateContent} = require('./content-lib');

const ROOT = path.resolve(__dirname, '..');
const content = loadContent();
const errors = validateContent(content);
if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

const lines = [];
const push = (value = '') => lines.push(value);
const pair = (key, value) => {
  push(`${key}.th: ${value.th}`);
  push(`${key}.en: ${value.en}`);
};

push('# AI Literacy editable content');
push('# Edit text after the colon. Keep keys and section markers unchanged.');
push('# Values must remain on one line. Unknown or malformed lines are rejected.');
push();

content.levels.forEach(level => {
  push(`=== LEVEL ${level.n} ===`);
  pair('name', level.name);
  pair('short', level.short);
  pair('desc', level.desc);
  level.items.forEach((item, index) => pair(`q${index + 1}`, item));
  pair('blurb', level.blurb);
  pair('nextH', level.nextH);
  level.next.forEach((item, index) => pair(`next${index + 1}`, item));
  level.workshops.forEach((item, index) => pair(`ws${index + 1}`, item));
  push();
});

push('=== ANSWER SCALE ===');
content.scale.forEach((choice, index) => {
  pair(`opt${index + 1}`, choice.lab);
  pair(`opt${index + 1}sub`, choice.sub);
});
push();

push('=== UI STRINGS ===');
for (const key of Object.keys(content.lang.th)) {
  const th = content.lang.th[key];
  const en = content.lang.en[key];
  if (Array.isArray(th)) {
    th.forEach((_, index) => pair(`${key}[${index + 1}]`, {th: th[index], en: en[index]}));
  } else {
    pair(key, {th, en});
  }
}

const output = `${lines.join('\n')}\n`;
fs.writeFileSync(path.join(ROOT, 'content.txt'), output);
console.log(`Wrote content.txt (${lines.length} lines).`);
