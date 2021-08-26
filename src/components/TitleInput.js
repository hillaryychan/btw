import CharCounter from "./CharCounter";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import React from "react";
import styles from "../utils/styles";

const MAX_TITLE_LEN = 100;

function TitleInput(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        Title<span style={styles.ReqInput}>*</span>{" "}
        <CharCounter count={props.title.length} maxCount={MAX_TITLE_LEN} />
      </Form.Label>
      <Form.Control
        name="title"
        type="text"
        maxLength={MAX_TITLE_LEN}
        placeholder="Note title"
        value={props.title}
        onChange={props.handleInputChange}
      />
    </Form.Group>
  );
}

TitleInput.propTypes = {
  "handleInputChange": PropTypes.func,
  "title": PropTypes.string
};

export default TitleInput;
