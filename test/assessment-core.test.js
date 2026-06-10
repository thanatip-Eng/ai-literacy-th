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
  assert.equal(core.cumulativePlacement([70, 70, 70]), 3);
});
