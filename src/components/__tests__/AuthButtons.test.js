import * as authUtils from "../../utils/auth";
import AuthButtons from "../AuthButtons";
import React from "react";
import {act} from "react-dom/test-utils";
import {appContext} from "../../contexts/AppContext";
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
import {unmountComponentAtNode} from "react-dom";

describe("AuthButtons rendering", () => {
  it("AuthButtons when initialising", () => {
    const tree = renderer.create(<AuthButtons init={true} />).toJSON();
    expect(tree).toMatchInlineSnapshot("null");
  });

  it("AuthButtons when signed out", () => {
    const tree = renderer.create(<AuthButtons />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
Array [
  <button
    className="mx-1 btn btn-primary"
    data-testid="signin-btn"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    Sign in
  </button>,
  <button
    className="mx-1 btn btn-secondary"
    data-testid="signup-btn"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    Sign up
  </button>,
]
`);
  });

  it("AuthButtons when signed in", () => {
    const props = {
      user: {
        displayName: "John Doe"
      }
    };
    const tree = renderer.
      create(<appContext.Provider value={props}>
        <AuthButtons />
      </appContext.Provider>).
      toJSON();
    expect(tree).toMatchInlineSnapshot(`
Array [
  <span
    className="me-2 navbar-text"
  >
    Signed in as: 
    <span
      className="Username"
    >
      John Doe
    </span>
  </span>,
  <button
    className="btn btn-secondary"
    data-testid="signout-btn"
    disabled={false}
    onClick={[Function]}
    type="button"
  >
    Sign out
  </button>,
]
`);
  });
});

describe("AuthButtons onClick", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("when signed in, 'Sign out' calls signOut()", () => {
    const props = {
      user: {
        displayName: "John Doe"
      }
    };
    const signOutBtn = jest.
      spyOn(authUtils, "signOut").
      mockImplementationOnce(() => {
        Promise.resolve([]);
      });

    act(() => {
      render(<appContext.Provider value={props}>
        <AuthButtons />
      </appContext.Provider>);
    });

    const button = document.querySelector("[data-testid=signout-btn]");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(signOutBtn).toHaveBeenCalledTimes(1);
  });
});
