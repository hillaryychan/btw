import "../../__mocks__/matchMediaMock";
import "firebase/auth";
import firebase from "firebase/app";
import {getUsername} from "../auth";

describe("firebase auth utils", () => {
  jest.
    spyOn(firebase, "auth").
    mockImplementationOnce(() => ({
      currentUser: {
        displayName: "Jerry Smith"
      }
    })).
    mockImplementationOnce(() => ({
      currentUser: {
        email: "jerrysmith@pluto.com"
      }
    })).
    mockImplementationOnce(() => ({
      currentUser: {}
    }));

  it("getUsername return display name if it exists", () => {
    expect(getUsername()).toBe("Jerry Smith");
  });

  it("getUsername return email if displayName does not exists", () => {
    expect(getUsername()).toBe("jerrysmith@pluto.com");
  });

  it("getUsername when no displayName and email", () => {
    expect(getUsername()).toBe("Unknown User");
  });
});
