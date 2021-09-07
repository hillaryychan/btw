import CharCounter from "../CharCounter";
import React from "react";
import renderer from "react-test-renderer";

it("CharCounter value rendering", () => {
  const tree = renderer.
    create(<CharCounter count={5} maxCount={100} />).
    toJSON();
  expect(tree).toMatchInlineSnapshot(`
<span
  className="Faded"
>
  (
  5
  /
  100
  )
</span>
`);
});
