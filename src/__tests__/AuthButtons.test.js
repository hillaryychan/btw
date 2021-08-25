import * as authUtils from "../utils/auth";
import AuthButtons from "../AuthButtons";
import React from "react";
import renderer from "react-test-renderer";

it("AuthButtons when initialising", () => {
  const tree = renderer.create(<AuthButtons init={true} />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

test("AuthButtons when signed out", () => {
  const tree = renderer.create(<AuthButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AuthButtons when signed in", () => {
  jest.spyOn(authUtils, "getUsername").mockReturnValue("John Doe");
  const tree = renderer.create(<AuthButtons signedIn={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});