import CharCounter from "./CharCounter";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import React from "react";

const MAX_DESC_LEN = 1000;

function DescriptionInput(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        Description{" "}
        <CharCounter count={props.description.length} maxCount={MAX_DESC_LEN} />
      </Form.Label>
      <Form.Control
        name="description"
        as="textarea"
        rows={5}
        maxLength={MAX_DESC_LEN}
        placeholder="Add description"
        value={props.description}
        onChange={props.handleInputChange}
      />
    </Form.Group>
  );
}

DescriptionInput.propTypes = {
  description: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default DescriptionInput;
