import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import React from "react";
import styles from "./styles";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={styles.Brand}>
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
          <Nav id="auth"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
