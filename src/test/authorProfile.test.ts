import { describe, expect, it } from "vitest";
import { authorProfile } from "../data/authorProfile";

describe("Amanda's current profile", () => {
  it("records 280 students as the displayed minimum", () => {
    expect(authorProfile.studentsHelped).toBe(280);
  });
  it("records 12 cohorts", () => {
    expect(authorProfile.cohorts).toBe(12);
  });
  it("records Statistics as the only major", () => {
    expect(authorProfile.major).toBe("Statistics");
  });
  it("records Economics as the minor", () => {
    expect(authorProfile.minor).toBe("Economics");
  });
});