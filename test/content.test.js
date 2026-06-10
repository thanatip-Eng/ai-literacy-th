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
  assert.equal(content.levels.reduce((sum, level) => sum + level.items.length, 0), 20);
  assert.deepEqual(content.levels.map(level => level.items.length), [5, 5, 5, 3, 2]);
  assert.deepEqual(content.scale.map(choice => choice.v), [0, 1, 2, 3, 4]);
  assert.deepEqual(content.scale.map(choice => choice.display), [1, 2, 3, 4, 5]);
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
  assert.match(exported, /opt5sub\.en: This is regularly me/);
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
