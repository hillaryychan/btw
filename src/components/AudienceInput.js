import {
  Badge,
  Button,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip
} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Click to remove
    </Tooltip>
  );
}

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
      <div id="audience-list">
        {props.audience.map((person, idx) => <OverlayTrigger
          key={idx}
          placement="top"
          delay={{"hide": 400, "show": 250}}
          overlay={renderTooltip}
        >
          <Badge
            pill
            id={`pers-${idx}`}
            className="m-1"
            onClick={props.removeAudience}
          >
            {person}
          </Badge>
        </OverlayTrigger>)}
      </div>
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
