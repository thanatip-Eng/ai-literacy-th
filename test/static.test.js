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

test('result explains the cumulative level blocker', () => {
  assert.match(html, /id="rPlacementNote"/);
  assert.match(html, /placementBlockedTpl/);
  assert.match(html, /const blockedLevel = placement \+ 1/);
  assert.match(html, /pcts\[placement\]/);
});

test('org tag block includes per-dimension score tags', () => {
  assert.match(html, /`#L\$\{L\.n\}:\$\{pcts\[i\] \|\| 0\}`/);
  assert.match(html, /`#\$\{sub\.key\}:\$\{partnership\.subtraitScores\[i\] \|\| 0\}`/);
  assert.match(html, /lines\.join\('\\n'\)/);
});

test('connect mode is wired in but defaults to the public zero-data path', () => {
  assert.match(html, /src="content\/connect-config\.js"/);
  assert.match(html, /if\(!c \|\| typeof c !== 'object' \|\| !c\.enabled\) return null;/);
  assert.match(html, /if\(!CONNECT_MODE \|\| !connectPayload\) return/);
  assert.match(html, /credentials: 'same-origin'/);
  assert.match(html, /id="gate"/);
});

test('feedback button opens the configured form with prefill in a new tab', () => {
  assert.match(html, /id="feedbackBtn"/);
  assert.match(html, /usp: 'pp_url'/);
  assert.match(html, /window\.open\(fb\.url \+ sep \+ params\.toString\(\), '_blank', 'noopener'\)/);
});

test('connect mode is scoped to connectHosts so other domains stay public', () => {
  assert.match(html, /c\.connectHosts\.includes\(location\.hostname\)/);
  assert.match(html, /function applyConnectCopyOverrides/);
});

test('balanced partnership profile shows a message instead of empty dashes', () => {
  assert.match(html, /id="rPHBalanced"/);
  assert.match(html, /\.partnership-highlights\[hidden\]\{display:none\}/);
  assert.match(html, /partnershipBalancedTpl/);
});

test('successful submit invites the user to the feedback survey once', () => {
  assert.match(html, /id="feedbackModal"/);
  assert.match(html, /maybeShowFeedbackModal\(\)/);
  assert.match(html, /feedbackModalShown = false/);
});

test('editor draft restore only merges known keys with matching types', () => {
  assert.match(html, /function mergeKnownShape/);
  assert.match(html, /Object\.keys\(target\)/);
  assert.match(html, /typeof sv === typeof tv/);
  assert.doesNotMatch(html, /function deepMerge/);
});
