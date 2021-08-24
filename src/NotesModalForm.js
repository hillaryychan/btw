import React, {Component} from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

class NotesModalForm extends Component {
  defaultState = {
    "description": "",
    "errors": [],
    "title": ""
  };

  constructor(props) {
    super(props);
    this.state = this.defaultState;
    this.exitForm = this.exitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  resetState() {
    this.setState(this.defaultState);
  }

  exitForm() {
    this.props.handleClose();
    this.resetState();
  }

  handleInputChange(event) {
    const {target} = event;
    this.setState({[target.name]: target.value});
  }

  validateForm() {
    const {title} = this.state;
    const {description} = this.state;
    const errors = [];

    if (title === "" && description === "") {
      errors.push("cannot create an empty note");
    } else if (title === "") {
      errors.push("note title cannot be empty");
    }

    return errors;
  }

  submitForm(event) {
    event.preventDefault();
    const errors = this.validateForm();
    if (errors.length === 0) {
      // TODO: store in firestore
      this.exitForm();
    }
    this.setState({errors});
  }

  render() {
    const {errors} = this.state;
    return (
      <Modal show={this.props.show} onHide={this.exitForm}>
        <Modal.Header>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors.map((message, idx) => <Alert key={idx} variant="danger">
              This is a {message} alert—check it out!
          </Alert>)}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Note title"
                value={this.title}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={5}
                placeholder="Description (optional)"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button variant="secondary" onClick={this.exitForm}>
              Cancel
            </Button>{" "}
            <Button variant="primary" type="submit" onClick={this.submitForm}>
              Create Note
            </Button>
          </Form>{" "}
        </Modal.Body>
      </Modal>
    );
  }
}

NotesModalForm.propTypes = {
  "handleClose": PropTypes.func,
  "show": PropTypes.bool
};

export default NotesModalForm;
