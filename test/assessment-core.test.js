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

test('role verdict flags at_cap when role ceiling exceeds assessable range', () => {
  const role = {floor: 2, ceiling: 4};
  const v = core.roleVerdict([80, 80, 80], role);
  assert.equal(v.kind, 'at_cap');
  assert.equal(v.placement, 3);
  assert.equal(v.targetCeiling, 4);
  assert.equal(v.capLevel, 3);
});

test('role verdict clamps ceiling to assessable range for non-cap cases', () => {
  const role = {floor: 2, ceiling: 5};
  const v = core.roleVerdict([80, 80, 60], role);
  assert.equal(v.kind, 'on_track');
  assert.equal(v.placement, 2);
  assert.equal(v.toGo, 1);
});

test('buildPartnershipQuestionList flattens subtrait items with reverse flag', () => {
  const partnership = {
    subtraits: [
      {key: 'a', items: [{reverse: false}, {reverse: true}]},
      {key: 'b', items: [{reverse: false}]}
    ]
  };
  const qs = core.buildPartnershipQuestionList(partnership);
  assert.equal(qs.length, 3);
  assert.deepEqual(qs[0], {subtraitIndex: 0, itemIndex: 0, reverse: false});
  assert.deepEqual(qs[1], {subtraitIndex: 0, itemIndex: 1, reverse: true});
  assert.deepEqual(qs[2], {subtraitIndex: 1, itemIndex: 0, reverse: false});
});

test('partnershipSubtraitScores inverts reverse-scored answers', () => {
  const partnership = {
    subtraits: [
      {key: 'a', items: [{reverse: false}, {reverse: true}]},
      {key: 'b', items: [{reverse: false}, {reverse: false}]}
    ]
  };
  const scores = core.partnershipSubtraitScores(partnership, [4, 0, 4, 4]);
  assert.deepEqual(scores, [100, 100]);
  const mixed = core.partnershipSubtraitScores(partnership, [4, 4, 2, 2]);
  assert.deepEqual(mixed, [50, 50]);
});

test('partnershipComposite averages subtrait scores', () => {
  assert.equal(core.partnershipComposite([100, 50, 25, 25]), 50);
  assert.equal(core.partnershipComposite([60, 60, 60, 60]), 60);
  assert.equal(core.partnershipComposite([]), 0);
});

test('quadrantPlacement assigns four quadrants from skill and partnership', () => {
  assert.equal(core.quadrantPlacement(0, 30), 'novice');
  assert.equal(core.quadrantPlacement(1, 30), 'novice');
  assert.equal(core.quadrantPlacement(0, 80), 'coach');
  assert.equal(core.quadrantPlacement(1, 80), 'coach');
  assert.equal(core.quadrantPlacement(2, 30), 'autopilot');
  assert.equal(core.quadrantPlacement(3, 30), 'autopilot');
  assert.equal(core.quadrantPlacement(2, 80), 'director');
  assert.equal(core.quadrantPlacement(3, 80), 'director');
});

test('quadrantPlacement respects custom cuts', () => {
  assert.equal(core.quadrantPlacement(1, 50, {skillCut: 1, partnershipCut: 50}), 'director');
  assert.equal(core.quadrantPlacement(1, 49, {skillCut: 1, partnershipCut: 50}), 'autopilot');
});
