import "../styles.css";
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import AuthButtons from "src/components/AuthButtons";
import React from "react";

export type NavigationProps = {
  init: boolean;
};

export default function Navigation({init}: NavigationProps): JSX.Element {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="Brand">
          btw
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Development" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/hillaryychan/btw">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <AuthButtons init={init} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
