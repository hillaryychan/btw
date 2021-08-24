import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import React from "react";

function NotesModalForm(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you&apos;re reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Create Note
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

NotesModalForm.propTypes = {
  "handleClose": PropTypes.func,
  "show": PropTypes.bool
};

export default NotesModalForm;
