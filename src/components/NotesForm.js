import {Badge, Button, Col, Form, Row} from "react-bootstrap";
import React, {Component} from "react";
import Alerts from "./Alerts";
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
    this.setState((prevState) => ({
      "audience": [...prevState.audience, audienceInput],
      "audienceInput": this.defaultState.audienceInput // reset audienceInput
    }));
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
        <Form.Group className="mb-3">
          <Form.Label>Audience</Form.Label>
          <Row className="g-2" xs={2}>
            <Col md>
              <Form.Control
                name="audienceInput"
                as="input"
                placeholder="Add an audience"
                value={this.state.audienceInput}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md>
              <Button variant="outline-primary" onClick={this.addAudience}>
                Add
              </Button>
            </Col>
          </Row>
          <div>
            {this.state.audience.map((person, idx) => <Badge pill key={idx} className="m-1">
              {person}
            </Badge>)}
          </div>
        </Form.Group>
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
