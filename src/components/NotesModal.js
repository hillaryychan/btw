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
        <NotesForm
          noteData={props.noteData}
          handleClose={props.handleClose}
          actionName={props.actionName}
          submitAction={props.submitAction}
        />
      </Modal.Body>
    </Modal>
  );
}

NotesModal.propTypes = {
  actionName: PropTypes.string,
  submitAction: PropTypes.func,
  handleClose: PropTypes.func,
  noteData: PropTypes.object,
  show: PropTypes.bool
};

export default NotesModal;
