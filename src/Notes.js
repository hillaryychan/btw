import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
            Create Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Notes;
