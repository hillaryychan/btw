import "../../__mocks__/matchMediaMock";
import React from "react";
import Welcome from "../Welcome";
import renderer from "react-test-renderer";

it("Welcome page rendering", () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  style={
    Object {
      "left": "50%",
      "position": "absolute",
      "textAlign": "center",
      "top": "50%",
      "transform": "translate(-50%, -50%)",
      "width": "90%",
    }
  }
>
  <h1>
    Welcome to 
    <span
      style={
        Object {
          "fontStyle": "italic",
          "fontWeight": "bold",
        }
      }
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
