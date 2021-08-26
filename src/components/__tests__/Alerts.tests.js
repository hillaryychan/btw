import Alerts from "../Alerts";
import React from "react";
import renderer from "react-test-renderer";

it("Alerts does not render when no errors passed as props", () => {
  const tree = renderer.create(<Alerts />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

it("Alerts does not render when no errors", () => {
  const tree = renderer.create(<Alerts errors={[]} />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

it("Alerts renders error message", () => {
  const errors = ["error msg 1"];
  const tree = renderer.create(<Alerts errors={errors} />).toJSON();
  expect(tree).toMatchInlineSnapshot();
});

it("Alerts render multiple error message", () => {
  const errors = ["erro msg 1", "erro msg 2", "erro msg 3"];
  const tree = renderer.create(<Alerts errors={errors} />).toJSON();
  expect(tree).toMatchInlineSnapshot();
});
