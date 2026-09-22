const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {execFileSync, spawnSync} = require('node:child_process');
const content = require('../content/app-content');
const {serializeContent, validateContent} = require('../tools/content-lib');

test('canonical content is complete and bilingual', () => {
  assert.deepEqual(validateContent(content), []);
  assert.equal(content.levels.length, 5);
  assert.equal(content.levels.reduce((sum, level) => sum + level.items.length, 0), 17);
  assert.deepEqual(content.levels.map(level => level.items.length), [4, 4, 4, 3, 2]);
  assert.deepEqual(content.scale.map(choice => choice.v), [0, 1, 2, 3, 4]);
  assert.deepEqual(content.scale.map(choice => choice.display), [1, 2, 3, 4, 5]);
});

test('partnership block has six subtraits with two items each', () => {
  const p = content.partnership;
  assert.ok(p, 'partnership block is required');
  assert.equal(p.subtraits.length, 6);
  assert.deepEqual(p.subtraits.map(sub => sub.key), ['verify', 'restraint', 'human_lead', 'direction', 'learning', 'privacy']);
  for (const sub of p.subtraits) {
    assert.equal(sub.items.length, 2, `subtrait ${sub.key} must have exactly 2 items`);
  }
  const totalItems = p.subtraits.reduce((sum, sub) => sum + sub.items.length, 0);
  assert.equal(totalItems, 12);
  assert.deepEqual(Object.keys(p.quadrants), ['novice', 'coach', 'autopilot', 'director']);
});

test('every partnership subtrait has exactly one reverse-scored item, in second position', () => {
  for (const sub of content.partnership.subtraits) {
    const reversed = sub.items.filter(item => item.reverse);
    assert.equal(reversed.length, 1, `subtrait ${sub.key} must have exactly 1 reverse item`);
    assert.equal(!!sub.items[1].reverse, true, `subtrait ${sub.key} reverse item must be the second item`);
  }
});

test('content module serialization round-trips', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-literacy-content-'));
  const file = path.join(dir, 'app-content.js');
  fs.writeFileSync(file, serializeContent(content));
  assert.deepEqual(require(file), content);
});

test('text export and apply round-trip without semantic changes', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-literacy-tools-'));
  fs.cpSync(path.resolve(__dirname, '..', 'tools'), path.join(dir, 'tools'), {recursive: true});
  fs.mkdirSync(path.join(dir, 'content'));
  fs.copyFileSync(
    path.resolve(__dirname, '..', 'content', 'app-content.js'),
    path.join(dir, 'content', 'app-content.js')
  );

  execFileSync(process.execPath, [path.join(dir, 'tools', 'export-content.js')], {cwd: dir});
  execFileSync(process.execPath, [path.join(dir, 'tools', 'apply-content.js')], {cwd: dir});
  assert.deepEqual(require(path.join(dir, 'content', 'app-content.js')), content);
});

test('text export includes editable answer scale labels', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-literacy-scale-export-'));
  fs.cpSync(path.resolve(__dirname, '..', 'tools'), path.join(dir, 'tools'), {recursive: true});
  fs.mkdirSync(path.join(dir, 'content'));
  fs.copyFileSync(
    path.resolve(__dirname, '..', 'content', 'app-content.js'),
    path.join(dir, 'content', 'app-content.js')
  );

  execFileSync(process.execPath, [path.join(dir, 'tools', 'export-content.js')], {cwd: dir});
  const exported = fs.readFileSync(path.join(dir, 'content.txt'), 'utf8');
  assert.match(exported, /=== ANSWER SCALE ===/);
  assert.match(exported, /opt1\.th: ไม่ตรงกับฉันเลย/);
  assert.match(exported, /opt5sub\.en: I can do this consistently/);
});

test('malformed text is rejected without changing content', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-literacy-invalid-'));
  fs.cpSync(path.resolve(__dirname, '..', 'tools'), path.join(dir, 'tools'), {recursive: true});
  fs.mkdirSync(path.join(dir, 'content'));
  const contentPath = path.join(dir, 'content', 'app-content.js');
  fs.copyFileSync(path.resolve(__dirname, '..', 'content', 'app-content.js'), contentPath);
  fs.writeFileSync(path.join(dir, 'content.txt'), '=== LEVEL 1 ===\nunknown.th: bad\n');
  const before = fs.readFileSync(contentPath, 'utf8');

  const result = spawnSync(process.execPath, [path.join(dir, 'tools', 'apply-content.js')], {
    cwd: dir,
    encoding: 'utf8'
  });
  assert.notEqual(result.status, 0);
  assert.equal(fs.readFileSync(contentPath, 'utf8'), before);
});

/* ---------------- student version: field of study ---------------- */

const QUADRANT_KEYS = ['novice', 'coach', 'autopilot', 'director'];

test('the three CMU field groups are defined bilingually', () => {
  const list = content.disciplines;
  assert.ok(Array.isArray(list), 'disciplines block is required');
  assert.deepEqual(list.map(d => d.code), ['health', 'scitech', 'humsoc']);
  for (const d of list) {
    for (const lang of ['th', 'en']) {
      assert.equal(typeof d.label[lang], 'string', `${d.code} label.${lang}`);
      assert.ok(d.label[lang].trim(), `${d.code} label.${lang} must not be empty`);
      // the hint lists the faculties in that group — it is what makes the
      // choice answerable in one tap
      assert.ok(d.hint && d.hint[lang] && d.hint[lang].trim(), `${d.code} hint.${lang}`);
    }
  }
});

test('field guidance covers every field in every quadrant', () => {
  const advice = content.disciplineAdvice;
  assert.ok(advice, 'disciplineAdvice block is required');
  assert.deepEqual(Object.keys(advice), content.disciplines.map(d => d.code));
  for (const [code, byQuadrant] of Object.entries(advice)) {
    assert.deepEqual(Object.keys(byQuadrant), QUADRANT_KEYS,
      `${code} must cover all four quadrants — a student landing in a missing one would see nothing`);
    for (const [quadrant, block] of Object.entries(byQuadrant)) {
      const where = `${code}.${quadrant}`;
      for (const lang of ['th', 'en']) {
        assert.ok(block.focus && block.focus[lang] && block.focus[lang].trim(), `${where} focus.${lang}`);
      }
      assert.equal(block.steps.length, 2, `${where} must offer exactly 2 steps`);
      for (const step of block.steps) {
        for (const lang of ['th', 'en']) {
          assert.ok(step[lang] && step[lang].trim(), `${where} step.${lang}`);
        }
      }
    }
  }
});

test('field guidance is distinct per field, not one text reused', () => {
  // The whole point is that a tech student and a health student read something
  // different; identical copy would quietly defeat the feature.
  for (const quadrant of QUADRANT_KEYS) {
    const focuses = content.disciplines.map(d => content.disciplineAdvice[d.code][quadrant].focus.th);
    assert.equal(new Set(focuses).size, focuses.length,
      `quadrant ${quadrant} repeats the same focus line across fields`);
  }
});
