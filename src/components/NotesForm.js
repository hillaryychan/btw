import "firebase/firestore";
import {Button, Form} from "react-bootstrap";
import React, {Component} from "react";
import {containsDuplicates, normaliseAudience} from "../utils/helper";
import Alerts from "./Alerts";
import AudienceInput from "./AudienceInput";
import DescriptionInput from "./DescriptionInput";
import PropTypes from "prop-types";
import TitleInput from "./TitleInput";
import firebase from "firebase/app";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState = this.initFormState();
    this.exitForm = this.exitForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addAudience = this.addAudience.bind(this);
    this.removeAudience = this.removeAudience.bind(this);
  }

  initFormState() {
    const state = {
      audience: [],
      audienceInput: "",
      description: "",
      errors: [],
      title: ""
    };
    const note = this.props.noteData;
    if (note) {
      state.title = note.title;
      state.description = note.description;
      state.audience = note.audience;
    }
    return state;
  }

  resetState() {
    this.setState(this.initialState);
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
    const member = normaliseAudience(audienceInput);
    if (member !== "") {
      const {audience} = this.state;
      audience.push(member);
      audience.sort();
      this.setState({
        audience,
        audienceInput: this.initialState.audienceInput // reset audienceInput
      });
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
    const {title, audience} = this.state;
    const errors = [];

    if (title === "") {
      errors.push("Note must have a title");
    }
    if (audience.length === 0) {
      errors.push("Note must have at least one audience");
    }
    if (containsDuplicates(audience)) {
      errors.push("Audience contains duplicates");
    }
    return errors;
  }

  createNote() {
    return {
      audience: this.state.audience,
      description: this.state.description,
      lastModified: firebase.firestore.FieldValue.serverTimestamp(),
      title: this.state.title
    };
  }

  submitForm(event) {
    event.preventDefault();
    const errors = this.validateForm();
    if (errors.length === 0) {
      const note = this.createNote();
      this.props.doNoteAction(note);
      this.exitForm();
    }
    this.setState({errors});
  }

  render() {
    return (
      <Form>
        <Alerts errors={this.state.errors} />
        <TitleInput
          title={this.state.title}
          handleInputChange={this.handleInputChange}
        />
        <DescriptionInput
          description={this.state.description}
          handleInputChange={this.handleInputChange}
        />
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
          {this.props.action}
        </Button>
      </Form>
    );
  }
}

NotesForm.propTypes = {
  action: PropTypes.string,
  doNoteAction: PropTypes.func,
  handleClose: PropTypes.func,
  noteData: PropTypes.object,
  notes: PropTypes.array
};

export default NotesForm;
