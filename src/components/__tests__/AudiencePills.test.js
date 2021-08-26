import {render, unmountComponentAtNode} from "react-dom";
import AudiencePills from "../AudiencePills";
import React from "react";
import {act} from "react-dom/test-utils";
import renderer from "react-test-renderer";

it("AudiencePills does not render when no audience passed as props", () => {
  const tree = renderer.create(<AudiencePills />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

it("AudiencePills does not render when no audience", () => {
  const tree = renderer.create(<AudiencePills audience={[]} />).toJSON();
  expect(tree).toMatchInlineSnapshot("null");
});

it("AudiencePills renders single audience", () => {
  const audience = ["donald duck"];
  const tree = renderer.create(<AudiencePills audience={audience} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  id="audience-list"
>
  <span
    className="m-1 badge rounded-pill bg-primary"
    id="pers-0"
    onBlur={[Function]}
    onFocus={[Function]}
    onMouseOut={[Function]}
    onMouseOver={[Function]}
  >
    donald duck
  </span>
</div>
`);
});

it("AudiencePills render multiple audience members", () => {
  const audience = ["huey", "dewey", "louie"];
  const tree = renderer.create(<AudiencePills audience={audience} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  id="audience-list"
>
  <span
    className="m-1 badge rounded-pill bg-primary"
    id="pers-0"
    onBlur={[Function]}
    onFocus={[Function]}
    onMouseOut={[Function]}
    onMouseOver={[Function]}
  >
    huey
  </span>
  <span
    className="m-1 badge rounded-pill bg-primary"
    id="pers-1"
    onBlur={[Function]}
    onFocus={[Function]}
    onMouseOut={[Function]}
    onMouseOver={[Function]}
  >
    dewey
  </span>
  <span
    className="m-1 badge rounded-pill bg-primary"
    id="pers-2"
    onBlur={[Function]}
    onFocus={[Function]}
    onMouseOut={[Function]}
    onMouseOver={[Function]}
  >
    louie
  </span>
</div>
`);
});

it("AudiencePills calls doAction on clicking person", () => {
  let container = document.createElement("div");
  document.body.appendChild(container);
  const doAction = jest.fn();
  act(() => {
    render(
      <AudiencePills audience={["sprig"]} doAction={doAction} />,
      container
    );
  });

  const person = document.querySelector("[id=pers-0]");
  expect(person.innerHTML).toBe("sprig");

  act(() => {
    person.dispatchEvent(new MouseEvent("click", {"bubbles": true}));
  });
  expect(doAction).toHaveBeenCalledTimes(1);

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
