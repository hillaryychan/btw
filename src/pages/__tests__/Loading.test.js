import Loading from "../Loading";
import React from "react";
import renderer from "react-test-renderer";

it("Loading page rendering", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
  id="home"
>
  <div
    style={
      Object {
        "left": "50%",
        "position": "absolute",
        "top": "50%",
        "transform": "translate(-50%, -50%)",
      }
    }
  >
    <div
      className="spinner-border"
      role="status"
    >
      <span
        className="visually-hidden"
      >
        Loading...
      </span>
    </div>
  </div>
</div>
`);
});
