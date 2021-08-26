import * as authUtils from "../../utils/auth";
import AuthButtons from "../AuthButtons";
import React from "react";
import renderer from "react-test-renderer";

it("AuthButtons when initialising", () => {
  const tree = renderer.create(<AuthButtons init={true} />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

it("AuthButtons when signed out", () => {
  const tree = renderer.create(<AuthButtons />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<button
  className="btn btn-primary"
  disabled={false}
  onClick={[Function]}
  type="button"
>
  Sign in with Google
</button>
`);
});

it("AuthButtons when signed in", () => {
  jest.spyOn(authUtils, "getUsername").mockReturnValue("John Doe");
  const tree = renderer.create(<AuthButtons signedIn={true} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
Array [
  <span
    className="me-2 navbar-text"
  >
    Signed in as: 
    <span
      style={
        Object {
          "color": "white",
        }
      }
    >
      John Doe
    </span>
  </span>,
  <button
    className="btn btn-secondary"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    Sign out
  </button>,
]
`);
});
