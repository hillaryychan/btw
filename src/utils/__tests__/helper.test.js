import {containsDuplicates, normaliseAudience} from "../helper";

describe("helper function tests", () => {
  it("containsDuplicates when there are no duplicates", () => {
    const arr = [1, 2, 3];
    expect(containsDuplicates(arr)).toBe(false);
  });

  it("containsDuplicates when there are duplicates", () => {
    const arr = [1, 2, 2, 3];
    expect(containsDuplicates(arr)).toBe(true);
  });

  it("normaliseAudience converts to lowercase", () => {
    expect(normaliseAudience("LOWERCASE")).toBe("lowercase");
  });

  it("normaliseAudience changes non alphanumeric chars to dash", () => {
    expect(normaliseAudience("!@#$%^&*()=+[]{}\\|;:'\"<>,./?")).toBe("-");
  });

  it("normaliseAudience converts input corrects", () => {
    expect(normaliseAudience("  hOp #$%poP     % ")).toBe("-hop-pop-");
  });
});
