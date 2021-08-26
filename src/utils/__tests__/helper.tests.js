import {containsDuplicates, normaliseAudience} from "../helper";

test("containsDuplicates when there are no duplicates", () => {
  const arr = [1, 2, 3];
  expect(containsDuplicates(arr)).toBe(false);
});

test("conta1insDuplicates when there are duplicates", () => {
  const arr = [1, 2, 2, 3];
  expect(containsDuplicates(arr)).toBe(true);
});

test("normaliseAudience converts to lowercase", () => {
  expect(normaliseAudience("LOWERCASE")).toBe("lowercase");
});

test("normaliseAudience changes non alphanumeric chars to dash", () => {
  expect(normaliseAudience("!@#$%^&*()=+[]{}\\|;:'\"<>,./?")).toBe("-");
});

test("normaliseAudience converts input corrects", () => {
  expect(normaliseAudience("  hop #$%pop     % ")).toBe("-hop-pop-");
});
