import React, {useState} from "react";
import {isUserSignedIn, signIn} from "./Authentication";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

function Welcome() {
  return (
    <>
      <h1>
        Welcome to{" "}
        <b>
          <i>btw</i>
        </b>
        !
      </h1>
      <p>
        Keep track of <b>what</b> you want to talk about with <b>whom</b> you
        want to talk to.
      </p>
      <Button variant="outline-primary" onClick={signIn}>
        Sign in with Google
      </Button>
    </>
  );
}

function Notes() {
  const [
    show,
    setShow
  ] = useState(false);

  function handleClose() {
    return setShow(false);
  }

  function handleShow() {
    return setShow(true);
  }

  return (
    <>
      <h1>My Notes</h1>
      <Button variant="primary" onClick={handleShow}>
        New Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you&apos;re reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Home() {
  const isSignedIn = isUserSignedIn();
  return <>{isSignedIn
    ? <Notes />
    : <Welcome />}</>;
}

function HomeContainer() {
  return <Container id="home" className="mt-2"></Container>;
}

export {Home};
export default HomeContainer;
