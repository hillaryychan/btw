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
    className="Center"
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
