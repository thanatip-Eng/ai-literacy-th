(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AI_LITERACY_CORE = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  function buildQuestionList(levels) {
    return levels.flatMap((level, levelIndex) =>
      level.items.map((_, itemIndex) => ({levelIndex, itemIndex}))
    );
  }

  function levelPercentages(levels, answers, maxScore = 4) {
    let offset = 0;
    return levels.map(level => {
      const count = level.items.length;
      const sum = answers
        .slice(offset, offset + count)
        .reduce((total, answer) => total + (answer || 0), 0);
      offset += count;
      return Math.round((sum / (count * maxScore)) * 100);
    });
  }

  function cumulativePlacement(percentages, threshold = 70) {
    let placement = 0;
    for (let index = 0; index < percentages.length; index++) {
      if (percentages[index] < threshold) break;
      placement = index + 1;
    }
    return placement;
  }

  function highestPassingLevel(percentages, threshold = 70) {
    let highest = 0;
    for (let index = 0; index < percentages.length; index++) {
      if (percentages[index] >= threshold) highest = index + 1;
    }
    return highest;
  }

  function roleVerdict(percentages, role, threshold = 70) {
    if (!role) return {kind: 'agnostic'};
    const placement = cumulativePlacement(percentages, threshold);
    const practiceMax = highestPassingLevel(percentages, threshold);
    const maxLevel = percentages.length;
    const {floor, ceiling} = role;
    if (ceiling > maxLevel && placement >= maxLevel) {
      return {
        kind: 'at_cap',
        placement,
        practiceMax,
        targetCeiling: ceiling,
        capLevel: maxLevel
      };
    }
    const effectiveCeiling = Math.min(ceiling, maxLevel);
    if (placement > effectiveCeiling || practiceMax > effectiveCeiling) {
      return {
        kind: 'above_ceiling',
        placement,
        practiceMax,
        over: Math.max(placement, practiceMax) - effectiveCeiling
      };
    }
    if (placement < floor) {
      return {kind: 'below_floor', placement, practiceMax, gap: floor - placement};
    }
    if (placement === effectiveCeiling) {
      return {kind: 'role_fit', placement, practiceMax};
    }
    return {kind: 'on_track', placement, practiceMax, toGo: effectiveCeiling - placement};
  }

  return {
    buildQuestionList,
    levelPercentages,
    cumulativePlacement,
    highestPassingLevel,
    roleVerdict
  };
});
