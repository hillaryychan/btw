import Modal from "react-bootstrap/Modal";
import NotesForm from "./NotesForm";
import PropTypes from "prop-types";
import React from "react";

function NotesModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NotesForm handleClose={props.handleClose} />
      </Modal.Body>
    </Modal>
  );
}

NotesModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool
};

export default NotesModal;
