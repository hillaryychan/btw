import Home from "../Home";
import React from "react";
import renderer from "react-test-renderer";

it("Home page when initialising", () => {
  const tree = renderer.create(<Home init={true} />).toJSON();
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

it("Home page when signed out", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
  id="home"
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
    Sign in with Google
  </button>
</div>
`);
});

it("Home page when signed in", () => {
  const tree = renderer.create(<Home signedIn={true} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
  id="home"
>
  <h1>
    My Notes
  </h1>
  <button
    className="btn btn-primary"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    New Note
  </button>
</div>
`);
});
