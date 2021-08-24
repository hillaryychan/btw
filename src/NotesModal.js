import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import NotesForm from "./NotesForm";
import PropTypes from "prop-types";

class NotesModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NotesForm handleClose={this.props.handleClose} />
        </Modal.Body>
      </Modal>
    );
  }
}

NotesModal.propTypes = {
  "handleClose": PropTypes.func,
  "show": PropTypes.bool
};

export default NotesModal;
