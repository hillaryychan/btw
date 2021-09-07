import "../../__mocks__/matchMediaMock";
import React from "react";
import SignIn from "../SignIn";
import renderer from "react-test-renderer";

it("SignIn page rendering", () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 AuthForm container"
>
  <h1
    className="CenterText"
  >
    Sign In
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
        name="password"
        onChange={[Function]}
        placeholder="Password"
        type="password"
        value=""
      />
    </div>
    <div
      className="CenterHorizontal"
    >
      <button
        className="btn btn-primary"
        disabled={false}
        onClick={[Function]}
        type="submit"
      >
        Sign in
      </button>
    </div>
  </form>
  <hr />
  <div
    className="CenterHorizontal"
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
