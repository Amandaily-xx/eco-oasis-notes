import { describe, expect, it } from "vitest";
import { incomeSubstitution as m } from "../data/incomeSubstitution";

describe("Hicks decomposition for a normal good after a price decrease", () => {
  it("holds original utility constant during substitution", () => {
    expect(m.compensated.x * m.compensated.y).toBeCloseTo(m.originalUtility);
    expect(m.compensated.x).toBeGreaterThan(m.original.x);
  });
  it("puts the compensated point at a tangency using the new price ratio", () => {
    expect(m.compensated.y / m.compensated.x).toBeCloseTo(m.newPrice);
    expect(m.newPrice * m.compensated.x + m.compensated.y).toBeCloseTo(m.compensatedIncome);
  });
  it("holds money income and the other price fixed while the budget pivots outward", () => {
    expect(m.oldPrice * m.original.x + m.original.y).toBe(12);
    expect(m.newPrice * m.final.x + m.final.y).toBe(12);
    expect(m.income / m.newPrice).toBeGreaterThan(m.income / m.oldPrice);
  });
  it("makes the normal-good income effect positive and total effect equal SE plus IE", () => {
    expect(m.incomeEffect).toBeGreaterThan(0);
    expect(m.substitutionEffect + m.incomeEffect).toBeCloseTo(m.totalEffect);
    expect(m.totalEffect).toBe(3);
  });
  it("makes both effects negative when this normal-good price change is reversed", () => {
    const compensatedX = Math.sqrt(m.finalUtility / m.oldPrice);
    const se = compensatedX - m.final.x;
    const ie = m.original.x - compensatedX;
    expect(se).toBeLessThan(0);
    expect(ie).toBeLessThan(0);
    expect(se + ie).toBe(-3);
  });
});