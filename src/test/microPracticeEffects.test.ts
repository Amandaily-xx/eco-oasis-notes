import { describe, expect, it } from "vitest";
import { microMCQuestions } from "../data/microPracticeData";

describe("Substitution and income effect quiz answers", () => {
  it("uses B for a non-Giffen inferior good's price decrease", () => {
    expect(microMCQuestions.find(q => q.id === 83)?.answer).toBe("B");
  });
  it("uses B for a normal good's price increase", () => {
    expect(microMCQuestions.find(q => q.id === 84)?.answer).toBe("B");
  });
  it("uses C for a normal good's price decrease", () => {
    expect(microMCQuestions.find(q => q.id === 85)?.answer).toBe("C");
  });
  it("keeps new question IDs unique in the quiz bank", () => {
    for (const id of [83, 84, 85]) {
      expect(microMCQuestions.filter(q => q.id === id)).toHaveLength(1);
    }
  });
});