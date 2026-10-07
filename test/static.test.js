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

test('a student cannot skip the field group, because skipping drops real content', () => {
  assert.match(html, /id="roleSkipRow"/);
  // Skipping empties fieldItemsFor(), which silently removes the six field
  // items, every example line and both Sheet columns — while the walkthrough
  // still promises 36 questions. A job role can genuinely be "none of these";
  // a field of study cannot, so the row only hides for students.
  assert.match(html, /const skipRow = document\.getElementById\('roleSkipRow'\);\s*\n\s*if\(skipRow\) skipRow\.hidden = student;/);
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
  // three anchors under the row — both ends and the middle, nothing else
  assert.match(html, /\[SCALE\[0\], SCALE\[Math\.floor\(SCALE\.length \/ 2\)\], SCALE\[SCALE\.length - 1\]\]/);
  assert.match(html, /\.scale-ends\{display:grid;grid-template-columns:1fr auto 1fr/);
  assert.doesNotMatch(html, /scale-legend/, 'the five-line legend was removed');
  // typing 1-5 answers, but never while a text field has focus or mid-advance
  assert.match(html, /!typing && !answerLocked && \/\^\[1-5\]\$\/\.test\(e\.key\)/);
});

test('the skill cut is read from content, never typed into the page', () => {
  assert.match(html, /const SKILL_CUT = \(typeof CONTENT\.skillThreshold === 'number'\)/);
  // It used to be written out at six call sites, and two of them already
  // disagreed with finish(). A bare number here means the next change to the
  // cut lands in some places and not others.
  assert.doesNotMatch(html, /const THRESH = \d+/, 'the cut must come from SKILL_CUT');
  assert.doesNotMatch(html, /roleVerdict\([^)]*,\s*\d+\)/, 'roleVerdict must be passed SKILL_CUT');
  assert.doesNotMatch(html, /placementCompleteTpl\(\d+\)/, 'the placement note must use SKILL_CUT');
});

test('the copy button hands over a skeleton, not a bare list of questions', () => {
  // The student used to be told to lay this out by hand in the form, on a
  // phone. If the "Answer:" line stops being copied, that instruction has to
  // come back, so the shape of the copied text is the thing worth pinning.
  assert.match(html, /\$\{i \+ 1\}\. \$\{line\}\\n\$\{label\}\\n/);
  assert.match(html, /const label = t\('reflectAnswerLabel'\);/);
  const content = require('../content/app-content.js');
  for (const lang of ['th', 'en']) {
    assert.ok((content.lang[lang].reflectAnswerLabel || '').trim(),
      `reflectAnswerLabel missing in ${lang}`);
  }
});

test('the result disclaimer frames the numbers instead of following them', () => {
  assert.match(html, /id="rDisclaimer" data-i18n="resultDisclaimer"/);
  // Order is the whole point. A disclaimer under the last chart is a disclaimer
  // nobody reads, so assert position, not presence.
  const hero = html.indexOf('id="rQuadrantHero"');
  const note = html.indexOf('id="rDisclaimer"');
  const first = html.indexOf('id="rInsightCard"');
  assert.ok(hero > -1 && note > -1 && first > -1, 'all three blocks must exist');
  assert.ok(hero < note, 'the disclaimer belongs under the quadrant hero');
  assert.ok(note < first, 'the disclaimer must come before the first card of numbers');
});

test('the without-AI card is rendered from its own two subtraits', () => {
  assert.match(html, /id="rWithoutAI" hidden/);
  assert.match(html, /const WITHOUT_AI_KEYS = \['self_reliance', 'effort', 'self_trust'\];/);
  assert.match(html, /renderWithoutAI\(partnership\);/);
  // a low score must not read as a footnote under a congratulatory quadrant
  assert.match(html, /box\.classList\.toggle\('without-ai-alert', mean < 40\);/);
  assert.match(html, /mean < 40 \? 'withoutAiLow' : \(mean < 70 \? 'withoutAiMid' : 'withoutAiHigh'\)/);
});

test('submissions are tagged as the v5 item set', () => {
  assert.doesNotMatch(html, /version: 'v[1-4]'/);
  assert.match(html, /version: 'v5'/);
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

test('both downloadable images carry the same credit line as the site footer', () => {
  // result card
  assert.match(html, /wrapToLines\(ctx, L18\.footerCopy, IMG_W - PAD\*2, 2\)/);
  // receipt
  assert.match(html, /ctx\.fillText\(t\('footerCopy'\), W\/2, 796\);/);
  // the card used to carry its own half-credit strings; they are gone for good
  assert.doesNotMatch(html, /imgAuthor|imgAffiliation/);
});

test('the open-ended comment is a labelled question and never blocks submitting', () => {
  assert.match(html, /data-i18n="mfbQ4"/);
  assert.match(html, /id="mfbNote"[^>]*maxlength="500"/);
  assert.doesNotMatch(html, /id="mfbNote"[^>]*required/);
  // only the three star answers gate the send button
  assert.match(html, /const ok = \(mfbRating > 0 && mfbFit > 0 && mfbUseful > 0\) \|\| mfbSent;/);
});

test('the outside view and the reflection prompts come from the result', () => {
  assert.match(html, /id="rOutsideView" hidden/);
  assert.match(html, /const keys = \['self_reliance', 'effort', 'self_trust', 'verify'\];/);
  assert.match(html, /id="rReflect" hidden/);
  assert.match(html, /entry\.pct !== null && entry\.pct < PARTNERSHIP_CUT/);
  // the reflection form is external and opt-in: no config, no button
  assert.match(html, /if\(!cfg \|\| !cfg\.url\) return '';/);
  assert.match(html, /id="reflectOpenBtn"[^>]*hidden/);
});

test('the outside view cites its evidence and links to the source page', () => {
  assert.match(html, /data-i18n="evidenceLine"/);
  assert.match(html, /href="frameworks\.html#gsr2026"/);
});

test('the score section leads with groups and never repeats the without-AI three', () => {
  assert.match(html, /id="rPartnershipGroups"/);
  assert.match(html, /PARTNERSHIP_GROUPS\.forEach/);
  // the per-dimension list skips whatever the card above already showed
  assert.match(html, /if\(WITHOUT_AI_KEYS\.includes\(sub\.key\)\) return;/);
  assert.match(html, /id="rPartnershipDetail"/);
});

test('the reflection form opens from the receipt, carrying its code', () => {
  assert.match(html, /function renderReflectLink/);
  assert.match(html, /renderReflectLink\(\);\s*\n\s*box\.hidden = false;/);
  assert.match(html, /receipt: \(connectReceiptInfo && connectReceiptInfo\.receipt\) \|\| '',/);
  // the button lives in the receipt box now, not in the reflection card
  assert.doesNotMatch(html, /reflect-actions"[\s\S]{0,200}reflectOpenBtn/);
});

test('form mode mints its own receipt code so the two exports can be matched', () => {
  assert.match(html, /function makeFormReceipt/);
  assert.match(html, /crypto\.getRandomValues/);
  // the code the student sees is the code the Sheet row carries
  assert.match(html, /connectPayload\.receipt = code;/);
  assert.match(html, /receiptInfo = \{receipt: code, stamp, email: ''\};/);
  // and it must not be the empty string that used to be sent
  assert.doesNotMatch(html, /receiptInfo = \{receipt: '', stamp/);
});

/* --- assignment.html: the student-facing walkthrough --- */
const assignmentHtml = fs.readFileSync(path.join(root, 'assignment.html'), 'utf8');

function assignmentStrings(){
  return require('../content/assignment-copy.js');
}

test('the assignment page loads its copy from content, not from its own markup', () => {
  assert.match(assignmentHtml, /<script src="content\/assignment-copy\.js"><\/script>/);
  assert.match(assignmentHtml, /const L = AISTYLE_ASSIGNMENT_COPY;/);
});

test('the assignment walkthrough says the same things in both languages', () => {
  const L = assignmentStrings();
  assert.deepEqual(Object.keys(L.th).sort(), Object.keys(L.en).sort());
  // the steps are numbered continuously across the two parts, so a language
  // that lost or gained one would renumber the other half
  assert.equal(L.th.steps1.length, L.en.steps1.length);
  assert.equal(L.th.steps2.length, L.en.steps2.length);
  assert.equal(L.th.trouble.length, L.en.trouble.length);
  for (const lang of ['th', 'en']) {
    for (const step of [...L[lang].steps1, ...L[lang].steps2]) {
      assert.ok(step.h && step.h.trim(), `${lang}: a step has no heading`);
    }
    for (const row of L[lang].trouble) {
      assert.equal(row.length, 2, `${lang}: a troubleshooting row is not a pair`);
    }
  }
});

test('the walkthrough quotes button names that actually exist in the app', () => {
  const L = assignmentStrings();
  const content = require('../content/app-content.js');
  // {ui:…} marks something the student has to find on screen — every one of
  // these must still be a real string, or the instructions send them hunting
  const quoted = new Set();
  for (const lang of ['th', 'en']) {
    const blob = JSON.stringify(L[lang]);
    for (const m of blob.matchAll(/\{ui:([^}]+)\}/g)) quoted.add(m[1]);
  }
  const onScreen = new Set();
  for (const lang of ['th', 'en']) {
    for (const value of Object.values(content.lang[lang])) {
      if (typeof value === 'string') onScreen.add(value.trim());
    }
  }
  const missing = [...quoted].filter(q => ![...onScreen].some(s => s === q || s.startsWith(q)));
  assert.deepEqual(missing, [], `not shown anywhere in the app: ${missing.join(' · ')}`);
});

/* --- the Canvas-pasteable build of that page --- */
test('the Canvas snippet is a current build of assignment.html', () => {
  const {execFileSync} = require('node:child_process');
  const os = require('node:os');
  const tmp = path.join(os.tmpdir(), `canvas-snippet-${process.pid}.html`);
  execFileSync(process.execPath, [path.join(root, 'tools', 'canvas-snippet.js'), tmp]);
  const fresh = fs.readFileSync(tmp, 'utf8');
  fs.unlinkSync(tmp);
  const committed = fs.readFileSync(path.join(root, 'docs', 'canvas-paste.html'), 'utf8');
  assert.equal(fresh, committed,
    'docs/canvas-paste.html is stale — run: node tools/canvas-snippet.js');
});

test('what gets pasted into Canvas survives its sanitizer', () => {
  const file = fs.readFileSync(path.join(root, 'docs', 'canvas-paste.html'), 'utf8');
  const boxes = [...file.matchAll(/<textarea[^>]*>([\s\S]*?)<\/textarea>/g)]
    .map(m => m[1].replace(/&lt;/g, '<'));
  assert.equal(boxes.length, 2, 'expected one copy box per language');
  for (const box of boxes) {
    // Canvas strips these outright, and the layout cannot fall back on them
    assert.doesNotMatch(box, /<script/i);
    assert.doesNotMatch(box, /<style/i);
    assert.doesNotMatch(box, /\sclass=/i);
    // the step numbers are real elements, not ::before circles. The count comes
    // from the copy so the test follows the walkthrough instead of pinning it to
    // a number someone wrote down once.
    const L = assignmentStrings();
    const steps = L.th.steps1.length + L.th.steps2.length;
    assert.equal((box.match(/border-radius:50%/g) || []).length, steps);
  }
});
