import About from "../About";
import React from "react";
import renderer from "react-test-renderer";

it("About page rendering", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
>
  <h1>
    About
  </h1>
  <p>
    Insert something about why I made this .-.
  </p>
</div>
`);
});
