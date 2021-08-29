import Navigation from "../Navigation";
import React from "react";
import renderer from "react-test-renderer";

it("Navigation bar rendering", () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<nav
  className="navbar navbar-expand-lg navbar-dark bg-dark"
>
  <div
    className="container"
  >
    <a
      className="navbar-brand"
      href="/"
      style={
        Object {
          "fontStyle": "italic",
          "fontWeight": "bold",
        }
      }
    >
      btw
    </a>
    <button
      aria-controls="basic-navbar-nav"
      aria-label="Toggle navigation"
      className="navbar-toggler collapsed"
      onClick={[Function]}
      type="button"
    >
      <span
        className="navbar-toggler-icon"
      />
    </button>
    <div
      aria-expanded={null}
      className="navbar-collapse collapse"
      id="basic-navbar-nav"
    >
      <div
        className="me-auto navbar-nav"
        onKeyDown={[Function]}
      >
        <a
          className="nav-link"
          data-rr-ui-event-key="/"
          disabled={false}
          href="/"
          onClick={[Function]}
        >
          Home
        </a>
        <div
          className="nav-item dropdown"
        >
          <a
            aria-expanded={false}
            className="dropdown-toggle nav-link"
            data-rr-ui-event-key={null}
            id="basic-nav-dropdown"
            onClick={[Function]}
            onKeyDown={[Function]}
            role="button"
            tabIndex={0}
          >
            Development
          </a>
        </div>
      </div>
      <div
        className="navbar-nav"
        onKeyDown={[Function]}
      >
        <button
          className="mx-1 btn btn-primary"
          data-testid="signin-btn"
          disabled={false}
          onClick={[Function]}
          type="button"
        >
          Sign in
        </button>
        <button
          className="mx-1 btn btn-secondary"
          data-testid="signup-btn"
          disabled={false}
          onClick={[Function]}
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</nav>
`);
});
