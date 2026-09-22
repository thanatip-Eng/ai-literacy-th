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

test('feedback survey opens as an in-page overlay so the result state survives', () => {
  assert.match(html, /id="feedbackBtn"/);
  assert.match(html, /usp: 'pp_url'/);
  assert.match(html, /params\.set\('embedded', 'true'\)/);
  assert.match(html, /id="surveyOverlay"/);
  assert.match(html, /id="surveyFrame"/);
  assert.match(html, /function closeSurveyOverlay/);
  assert.doesNotMatch(html, /window\.open\(fb\.url/);
});

test('connect mode is scoped to connectHosts so other domains stay public', () => {
  assert.match(html, /c\.connectHosts\.includes\(location\.hostname\)/);
  assert.match(html, /function applyConnectCopyOverrides/);
});

test('balanced partnership profile shows a message instead of empty dashes', () => {
  assert.match(html, /id="rPHBalanced"/);
  assert.match(html, /partnershipBalancedTpl/);
});

test('demo mode never builds a connect payload or shows the submit box', () => {
  assert.match(html, /CONNECT_MODE && !DEMO_PROFILE/);
  assert.match(html, /id="demoBanner"/);
});

test('the hidden attribute always beats display rules', () => {
  assert.match(html, /\[hidden\]\{display:none !important\}/);
});

test('successful submit invites the user to the feedback survey once', () => {
  assert.match(html, /id="feedbackModal"/);
  assert.match(html, /maybeShowFeedbackModal\(\)/);
  assert.match(html, /feedbackModalShown = false/);
});

test('the org tag section is hidden for connect-mode audiences', () => {
  assert.match(html, /id="orgTagSection"/);
  assert.match(html, /document\.getElementById\('orgTagSection'\)\.hidden = true/);
});

test('results are submitted manually and produce a screenshot-able receipt', () => {
  assert.doesNotMatch(html, /show\('result'\);\s*if\(CONNECT_MODE\)\{\s*connectPayload = buildConnectPayload\(pcts, placement, partnership\);\s*submitConnectResult\(\);/);
  assert.match(html, /id="connectSubmitBox"/);
  assert.match(html, /id="connectReceipt"/);
  assert.match(html, /function renderReceipt/);
});

test('the receipt box offers a downloadable image of itself', () => {
  assert.match(html, /id="receiptDownloadBtn"/);
  assert.match(html, /function generateReceiptImage/);
  assert.match(html, /AiStyle-Receipt-\$\{code\}-\$\{ymd\}\.png/);
});

test('editor draft restore only merges known keys with matching types', () => {
  assert.match(html, /function mergeKnownShape/);
  assert.match(html, /Object\.keys\(target\)/);
  assert.match(html, /typeof sv === typeof tv/);
  assert.doesNotMatch(html, /function deepMerge/);
});

test('the student path is gated on student mode and drops the role ceiling', () => {
  assert.match(html, /function studentMode\(\)\{ return !!CONNECT_MODE \|\| demoCanvas\(\); \}/);
  // the field screen reuses #role, so both halves must stay behind the gate
  assert.match(html, /const options = student \? DISCIPLINES : ROLES;/);
  assert.match(html, /if\(guideRow\) guideRow\.hidden = student;/);
  // students never see the "you outgrew your role" card or the ceiling link
  assert.match(html, /if\(studentMode\(\)\)\{\s*if\(stretchBox\) stretchBox\.hidden = true;\s*if\(ceilingLink\) ceilingLink\.hidden = true;\s*renderDisciplineAdvice\(\);\s*return;/);
  assert.match(html, /id="rFieldAdvice" hidden/);
});

test('field of study and job role never overwrite each other', () => {
  assert.match(html, /let userDiscipline = null;/);
  assert.match(html, /userDiscipline = DISCIPLINES\.find\(d => d\.code === code\) \|\| null;\s*userRole = null;/);
  assert.match(html, /userRole = ROLES\.find\(r => r\.code === code\) \|\| null;\s*userDiscipline = null;/);
  assert.match(html, /discipline: userDiscipline \? userDiscipline\.code : '',/);
});

test('the per-field example line is gated on student mode', () => {
  assert.match(html, /id="qExample" hidden/);
  assert.match(html, /function renderQExample/);
  assert.match(html, /studentMode\(\) && userDiscipline && itemObj && itemObj\.examples/);
  assert.match(html, /if\(!set\)\{ box\.hidden = true; box\.textContent = ''; return; \}/);
});

test('the answer scale is a single horizontal row that keeps its keyboard path', () => {
  assert.match(html, /role="radiogroup"/);
  assert.match(html, /b\.className = 'step' \+ \(answers\[idx\] === s\.v \? ' sel' : ''\);/);
  assert.match(html, /\.scale-row\{display:grid;grid-template-columns:repeat\(5,1fr\)/);
  // the full wording only appears while the pattern is still new
  assert.match(html, /const SCALE_LEGEND_QS = 2;/);
  assert.match(html, /if\(idx < SCALE_LEGEND_QS\)\{/);
  // typing 1-5 answers, but never while a text field has focus or mid-advance
  assert.match(html, /!typing && !answerLocked && \/\^\[1-5\]\$\/\.test\(e\.key\)/);
});

test('the without-AI card is rendered from its own two subtraits', () => {
  assert.match(html, /id="rWithoutAI" hidden/);
  assert.match(html, /const WITHOUT_AI_KEYS = \['self_reliance', 'effort'\];/);
  assert.match(html, /renderWithoutAI\(partnership\);/);
  // a low score must not read as a footnote under a congratulatory quadrant
  assert.match(html, /box\.classList\.toggle\('without-ai-alert', mean < 40\);/);
  assert.match(html, /mean < 40 \? 'withoutAiLow' : \(mean < 70 \? 'withoutAiMid' : 'withoutAiHigh'\)/);
});

test('submissions are tagged as the v4 item set', () => {
  assert.doesNotMatch(html, /version: 'v3'/);
  assert.match(html, /version: 'v4'/);
});

test('the field block is appended to the quiz and kept out of the core score', () => {
  assert.match(html, /const CORE_COUNT = CORE_QS\.length;/);
  assert.match(html, /function rebuildQuestionList\(\)\{/);
  assert.match(html, /QS = CORE_QS\.concat\(extra\);/);
  // scoring reads the core slice only, whatever the field block added
  assert.match(html, /const partnershipAnswers = answers\.slice\(SKILL_COUNT, CORE_COUNT\);/);
  assert.match(html, /answers\.slice\(CORE_COUNT, CORE_COUNT \+ items\.length\)/);
  assert.match(html, /id="rFieldCheck" hidden/);
});
