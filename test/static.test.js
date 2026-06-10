const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const tools = fs.readdirSync(path.join(root, 'tools'))
  .filter(file => file.endsWith('.js'))
  .map(file => fs.readFileSync(path.join(root, 'tools', file), 'utf8'))
  .join('\n');

test('page references the canonical content and scoring modules', () => {
  assert.match(html, /src="content\/app-content\.js"/);
  assert.match(html, /src="js\/assessment-core\.js"/);
});

test('content tools do not evaluate source code', () => {
  assert.doesNotMatch(tools, /\beval\s*\(/);
  assert.doesNotMatch(tools, /\bnew Function\s*\(/);
});

test('editor export does not fetch the current page', () => {
  assert.doesNotMatch(html, /fetch\(location\.pathname/);
  assert.match(html, /a\.download = 'app-content\.js'/);
});

test('quiz guards against repeated input during auto-advance', () => {
  assert.match(html, /if\(answerLocked\) return/);
  assert.match(html, /const answeredIndex = idx/);
  assert.match(html, /if\(idx !== answeredIndex\) return/);
});

test('editor draft restore only merges known keys with matching types', () => {
  assert.match(html, /function mergeKnownShape/);
  assert.match(html, /Object\.keys\(target\)/);
  assert.match(html, /typeof sv === typeof tv/);
  assert.doesNotMatch(html, /function deepMerge/);
});
