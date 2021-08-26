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
  expect(tree).toMatchInlineSnapshot(`
<div
  className="fade alert alert-danger show"
  role="alert"
  style={
    Object {
      "textAlign": "center",
    }
  }
>
  error msg 1
</div>
`);
});

it("Alerts render multiple error message", () => {
  const errors = ["error msg 1", "error msg 2", "error msg 3"];
  const tree = renderer.create(<Alerts errors={errors} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
Array [
  <div
    className="fade alert alert-danger show"
    role="alert"
    style={
      Object {
        "textAlign": "center",
      }
    }
  >
    error msg 1
  </div>,
  <div
    className="fade alert alert-danger show"
    role="alert"
    style={
      Object {
        "textAlign": "center",
      }
    }
  >
    error msg 2
  </div>,
  <div
    className="fade alert alert-danger show"
    role="alert"
    style={
      Object {
        "textAlign": "center",
      }
    }
  >
    error msg 3
  </div>,
]
`);
});
