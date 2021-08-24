import {Alert, Button, Form} from "react-bootstrap";
import React, {Component} from "react";
import PropTypes from "prop-types";

const MAX_DESC_LEN = 500;

class NotesForm extends Component {
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
      errors.push("note must have a title");
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
      <Form>
        {errors.map((message, idx) => <Alert key={idx} variant="danger">
            Error: {message}
        </Alert>)}
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
          <Form.Label>
            Description{" "}
            <span style={{"color": "gray"}}>
              ({this.state.description.length}/{MAX_DESC_LEN})
            </span>
          </Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={5}
            maxLength={MAX_DESC_LEN}
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
      </Form>
    );
  }
}

NotesForm.propTypes = {
  "handleClose": PropTypes.func
};

export default NotesForm;
