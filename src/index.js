import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">btw</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
            <NavDropdown title="Development" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/hillaryychan/btw">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
