import React from "react";
import SignIn from "../SignIn";
import renderer from "react-test-renderer";

it("SignIn page rendering", () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
>
  <div
    className="AuthForm"
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
          placeholder="email@email.com"
          type="email"
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
          placeholder="password"
          type="password"
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
</div>
`);
});
