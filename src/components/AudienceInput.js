import {Button, Col, Form, Row} from "react-bootstrap";
import AudiencePills from "./AudiencePills";
import PropTypes from "prop-types";
import React from "react";

function AudienceInput(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Audience</Form.Label>
      <Row className="g-2" xs={2}>
        <Col md>
          <Form.Control
            name="audienceInput"
            as="input"
            placeholder="Add an audience"
            value={props.audienceInput}
            onChange={props.handleInputChange}
          />
        </Col>
        <Col md>
          <Button variant="outline-primary" onClick={props.addAudience}>
            Add
          </Button>
        </Col>
      </Row>
      <AudiencePills
        audience={props.audience}
        actionName="remove"
        doAction={props.removeAudience}
      />
    </Form.Group>
  );
}

AudienceInput.propTypes = {
  "addAudience": PropTypes.func,
  "audience": PropTypes.array,
  "audienceInput": PropTypes.string,
  "handleInputChange": PropTypes.func,
  "removeAudience": PropTypes.func
};

export default AudienceInput;
