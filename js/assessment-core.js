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

  return {buildQuestionList, levelPercentages, cumulativePlacement};
});
