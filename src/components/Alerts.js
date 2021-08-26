import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
import React from "react";

function Alerts(props) {
  if (props.errors) {
    return (
      <>
        {props.errors.map((msg, idx) => <Alert key={idx} variant="danger">
            Error: {msg}
        </Alert>)}
      </>
    );
  }

  return null;
}

Alerts.propTypes = {
  "errors": PropTypes.array
};

export default Alerts;
