import React from "react";
import Welcome from "../Welcome";
import renderer from "react-test-renderer";

it("Welcome page rendering", () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="Welcome"
>
  <h1>
    Welcome to 
    <span
      className="Brand"
    >
      btw
    </span>
    !
  </h1>
  <p>
    Keep track of 
    <b>
      what
    </b>
     you want to talk about with 
    <b>
      whom
    </b>
     you want to talk to.
  </p>
  <button
    className="btn btn-outline-primary"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    Get Started
  </button>
</div>
`);
});
