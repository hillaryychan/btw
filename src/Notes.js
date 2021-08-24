import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import NotesModal from "./NotesModal";

function Notes() {
  const [show, setShow] = useState(false);

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

      <NotesModal handleClose={handleClose} show={show} />
    </>
  );
}

export default Notes;
