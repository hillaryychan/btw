import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import NotesModalForm from "./NotesModalForm";

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

      <NotesModalForm handleClose={handleClose} show={show} />
    </>
  );
}

export default Notes;
