import {
  canShow,
  containsDuplicates,
  createDoc,
  normaliseAudience
} from "../helper";
import {DEFAULT_FILTER} from "../../constants";

describe("canShow", () => {
  const note = {audience: ["bob", "linda"]};
  it("assigns true show when DEFAULT_FILTER", () => {
    expect(canShow(note, DEFAULT_FILTER)).toBe(true);
  });

  it("assigns true show when given filter exists in audience", () => {
    expect(canShow(note, "bob")).toBe(true);
    expect(canShow(note, "linda")).toBe(true);
  });

  it("assigns false show when given filter does not exists in audience", () => {
    expect(canShow(note, "louise")).toBe(false);
  });
});

describe("containsDuplicates", () => {
  it("when there are no duplicates", () => {
    const arr = ["one", "two", "three"];
    expect(containsDuplicates(arr)).toBe(false);
  });

  it("when there are duplicates", () => {
    const arr = ["one", "two", "two", "three"];
    expect(containsDuplicates(arr)).toBe(true);
  });
});

describe("createDoc", () => {
  it("creates doc object", () => {
    const ref = "refValue";
    const note = {
      audience: ["everyone"],
      description: "description",
      lastModified: "now",
      title: "title"
    };
    const doc = createDoc(ref, note, "");
    expect(doc.ref).toBe(ref);
    expect(doc.data).toEqual(note);
    expect(doc.show).toBe(true);
  });
});

describe("normaliseAudience", () => {
  it("converts to lowercase", () => {
    expect(normaliseAudience("LOWERCASE")).toBe("lowercase");
  });

  it("changes non alphanumeric chars to dash", () => {
    expect(normaliseAudience("!@#$%^&*()=+[]{}\\|;:'\"<>,./?")).toBe("-");
  });

  it("converts input corrects", () => {
    expect(normaliseAudience("  hOp #$%poP     % ")).toBe("-hop-pop-");
  });
});
