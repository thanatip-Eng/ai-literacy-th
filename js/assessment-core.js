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

  function buildPartnershipQuestionList(partnership) {
    if (!partnership || !Array.isArray(partnership.subtraits)) return [];
    return partnership.subtraits.flatMap((sub, subtraitIndex) =>
      sub.items.map((item, itemIndex) => ({
        subtraitIndex,
        itemIndex,
        reverse: !!item.reverse
      }))
    );
  }

  function partnershipSubtraitScores(partnership, answers, maxScore = 4) {
    if (!partnership || !Array.isArray(partnership.subtraits)) return [];
    let offset = 0;
    return partnership.subtraits.map(sub => {
      const count = sub.items.length;
      const slice = answers.slice(offset, offset + count);
      offset += count;
      const sum = sub.items.reduce((total, item, i) => {
        const v = slice[i] || 0;
        return total + (item.reverse ? maxScore - v : v);
      }, 0);
      return Math.round((sum / (count * maxScore)) * 100);
    });
  }

  function partnershipComposite(subtraitScores) {
    if (!subtraitScores || !subtraitScores.length) return 0;
    const sum = subtraitScores.reduce((a, b) => a + b, 0);
    return Math.round(sum / subtraitScores.length);
  }

  function quadrantPlacement(skillLevel, partnershipPct, options = {}) {
    const skillCut = options.skillCut != null ? options.skillCut : 2;
    const partnershipCut = options.partnershipCut != null ? options.partnershipCut : 60;
    const highSkill = skillLevel >= skillCut;
    const highPartnership = partnershipPct >= partnershipCut;
    if (highSkill && highPartnership) return 'director';
    if (highSkill && !highPartnership) return 'autopilot';
    if (!highSkill && highPartnership) return 'coach';
    return 'novice';
  }

  return {
    buildQuestionList,
    levelPercentages,
    cumulativePlacement,
    highestPassingLevel,
    roleVerdict,
    buildPartnershipQuestionList,
    partnershipSubtraitScores,
    partnershipComposite,
    quadrantPlacement
  };
});
