// Hicks decomposition for U(x, y) = x*y, with the other good's price fixed at 1.
export const incomeSubstitution = (() => {
  const income = 12;
  const oldPrice = 2;
  const newPrice = 1;
  const original = { x: income / (2 * oldPrice), y: income / 2 };
  const originalUtility = original.x * original.y;
  const compensated = {
    x: Math.sqrt(originalUtility / newPrice),
    y: Math.sqrt(originalUtility * newPrice),
  };
  const final = { x: income / (2 * newPrice), y: income / 2 };
  return {
    income, oldPrice, newPrice, original, compensated, final,
    originalUtility,
    finalUtility: final.x * final.y,
    compensatedIncome: newPrice * compensated.x + compensated.y,
    substitutionEffect: compensated.x - original.x,
    incomeEffect: final.x - compensated.x,
    totalEffect: final.x - original.x,
  };
})();