import "../../__mocks__/matchMediaMock";
import React from "react";
import SignUp from "../SignUp";
import renderer from "react-test-renderer";

it("SignUp page rendering", () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
  style={
    Object {
      "margin": "0 auto",
      "maxWidth": "500px",
    }
  }
>
  <h1
    style={
      Object {
        "textAlign": "center",
      }
    }
  >
    Sign Up
  </h1>
  <form
    className=""
  >
    <div
      className="mb-3"
    >
      <label
        className="form-label"
        htmlFor="formBasicEmail"
      >
        Email address
      </label>
      <input
        className="form-control"
        id="formBasicEmail"
        name="email"
        onChange={[Function]}
        placeholder="Enter email"
        type="email"
        value=""
      />
    </div>
    <div
      className="mb-3"
    >
      <label
        className="form-label"
        htmlFor="formBasicPassword"
      >
        Password
      </label>
      <input
        className="form-control"
        id="formBasicPassword"
        name="password1"
        onChange={[Function]}
        placeholder="Password"
        type="password"
        value=""
      />
    </div>
    <div
      className="mb-3"
    >
      <label
        className="form-label"
        htmlFor="formBasicPassword"
      >
        Re-enter password
      </label>
      <input
        className="form-control"
        id="formBasicPassword"
        name="password2"
        onChange={[Function]}
        placeholder="Re-enter password"
        type="password"
        value=""
      />
    </div>
    <div
      style={
        Object {
          "display": "flex",
          "justifyContent": "center",
        }
      }
    >
      <button
        className="btn btn-primary"
        disabled={false}
        onClick={[Function]}
        type="submit"
      >
        Sign up
      </button>
    </div>
  </form>
  <hr />
  <div
    style={
      Object {
        "display": "flex",
        "justifyContent": "center",
      }
    }
  >
    <button
      className="btn btn-outline-primary"
      disabled={false}
      onClick={[Function]}
      type="submit"
    >
      Sign in with Google
    </button>
  </div>
</div>
`);
});