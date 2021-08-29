import "../../__mocks__/matchMediaMock";
import {render, unmountComponentAtNode} from "react-dom";
import NotesForm from "../NotesForm";
import React from "react";
import {act} from "react-dom/test-utils";

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

it("NotesForm calls handleClose on cancel button", () => {
  const handleClose = jest.fn();
  act(() => {
    render(<NotesForm handleClose={handleClose} />, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=cancel-btn]");
  expect(button.innerHTML).toBe("Cancel");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  });
  expect(handleClose).toHaveBeenCalledTimes(1);
});
