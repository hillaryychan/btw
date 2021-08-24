import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

class NotesModalForm extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you&apos;re reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Create Note
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

NotesModalForm.propTypes = {
  "handleClose": PropTypes.func,
  "show": PropTypes.bool
};

export default NotesModalForm;
