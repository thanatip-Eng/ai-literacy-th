const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../js/assessment-core');
const content = require('../content/app-content');

test('builds one flat question entry for every level item', () => {
  const questions = core.buildQuestionList(content.levels);
  const expected = content.levels.reduce((total, level) => total + level.items.length, 0);
  assert.equal(questions.length, expected);
  assert.deepEqual(questions[0], {levelIndex: 0, itemIndex: 0});
});

test('calculates percentages without assuming four questions per level', () => {
  const levels = [{items: [{}, {}]}, {items: [{}, {}, {}]}];
  assert.deepEqual(core.levelPercentages(levels, [4, 2, 4, 3, 2]), [75, 75]);
});

test('uses stored answer values from zero to four', () => {
  const levels = [{items: [{}, {}, {}, {}, {}]}];
  assert.deepEqual(core.levelPercentages(levels, [0, 1, 2, 3, 4]), [50]);
  assert.deepEqual(core.levelPercentages(levels, [4, 4, 4, 4, 4]), [100]);
});

test('placement stops at the first level below threshold', () => {
  assert.equal(core.cumulativePlacement([80, 75, 65, 100, 100]), 2);
  assert.equal(core.cumulativePlacement([65, 100, 100]), 0);
  assert.equal(core.cumulativePlacement([65, 65, 70, 50, 75]), 0);
  assert.equal(core.cumulativePlacement([70, 70, 70]), 3);
});

test('highest passing level ignores gaps', () => {
  assert.equal(core.highestPassingLevel([80, 75, 65, 90, 100]), 5);
  assert.equal(core.highestPassingLevel([50, 60, 65]), 0);
  assert.equal(core.highestPassingLevel([70, 60, 70]), 3);
});

test('role verdict reports agnostic when no role given', () => {
  assert.deepEqual(core.roleVerdict([90, 90, 90, 90, 90], null), {kind: 'agnostic'});
  assert.deepEqual(core.roleVerdict([0, 0, 0, 0, 0], undefined), {kind: 'agnostic'});
});

test('role verdict flags below_floor when cumulative under role floor', () => {
  const role = {floor: 2, ceiling: 3};
  const v = core.roleVerdict([60, 60, 0, 0, 0], role);
  assert.equal(v.kind, 'below_floor');
  assert.equal(v.placement, 0);
  assert.equal(v.gap, 2);
});

test('role verdict flags on_track between floor and ceiling', () => {
  const role = {floor: 2, ceiling: 4};
  const v = core.roleVerdict([80, 80, 60, 0, 0], role);
  assert.equal(v.kind, 'on_track');
  assert.equal(v.placement, 2);
  assert.equal(v.toGo, 2);
});

test('role verdict flags role_fit when cumulative equals ceiling', () => {
  const role = {floor: 2, ceiling: 3};
  const v = core.roleVerdict([80, 80, 80, 50, 0], role);
  assert.equal(v.kind, 'role_fit');
  assert.equal(v.placement, 3);
});

test('role verdict flags above_ceiling when cumulative exceeds ceiling', () => {
  const role = {floor: 1, ceiling: 2};
  const v = core.roleVerdict([90, 90, 90, 0, 0], role);
  assert.equal(v.kind, 'above_ceiling');
  assert.equal(v.placement, 3);
  assert.equal(v.over, 1);
});

test('role verdict flags above_ceiling when practiceMax exceeds ceiling even with gap', () => {
  const role = {floor: 1, ceiling: 2};
  const v = core.roleVerdict([90, 60, 90, 0, 0], role);
  assert.equal(v.kind, 'above_ceiling');
  assert.equal(v.practiceMax, 3);
  assert.equal(v.placement, 1);
  assert.equal(v.over, 1);
});
