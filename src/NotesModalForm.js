import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

class NotesModalForm extends Component {
  defaultValues = {
    "description": "",
    "title": ""
  };

  constructor(props) {
    super(props);
    this.state = this.defaultValues;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(event) {
    const {target} = event;
    this.setState({[target.name]: target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleClose();
    // Reset form values
    this.setState(this.defaultValues);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Button variant="secondary" onClick={this.props.handleClose}>
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
