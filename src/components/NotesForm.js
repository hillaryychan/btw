import {Button, Form} from "react-bootstrap";
import React, {Component} from "react";
import Alerts from "./Alerts";
import AudienceInput from "./AudienceInput";
import CharCounter from "./CharCounter";
import PropTypes from "prop-types";

const MAX_DESC_LEN = 500;
const MAX_TITLE_LEN = 100;

class NotesForm extends Component {
  defaultState = {
    "audience": [],
    "audienceInput": "",
    "description": "",
    "errors": [],
    "title": ""
  };

  constructor(props) {
    super(props);
    this.state = this.defaultState;
    this.exitForm = this.exitForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addAudience = this.addAudience.bind(this);
    this.removeAudience = this.removeAudience.bind(this);
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

  addAudience() {
    const {audienceInput} = this.state;
    if (audienceInput !== "") {
      this.setState((prevState) => ({
        "audience": [...prevState.audience, audienceInput],
        "audienceInput": this.defaultState.audienceInput // reset audienceInput
      }));
    }
  }

  removeAudience(event) {
    const person = event.target.id;
    const idx = parseInt(person.slice(5), 10);

    const {audience} = this.state;
    audience.splice(idx, 1);
    this.setState([audience]);
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
    return (
      <Form>
        <Alerts errors={this.state.errors} />
        <Form.Group className="mb-3">
          <Form.Label>
            Title{" "}
            <CharCounter
              count={this.state.title.length}
              maxCount={MAX_TITLE_LEN}
            />
          </Form.Label>
          <Form.Control
            name="title"
            type="text"
            maxLength={MAX_TITLE_LEN}
            placeholder="Note title"
            value={this.title}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Description{" "}
            <CharCounter
              count={this.state.description.length}
              maxCount={MAX_DESC_LEN}
            />
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
        <AudienceInput
          addAudience={this.addAudience}
          audience={this.state.audience}
          audienceInput={this.state.audienceInput}
          handleInputChange={this.handleInputChange}
          removeAudience={this.removeAudience}
        />
        <Button
          variant="secondary"
          onClick={this.exitForm}
          data-testid="cancel-btn"
        >
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