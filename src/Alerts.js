import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
import React from "react";

function Alerts(props) {
  return (
    <>
      {props.errors.map((msg, idx) => <Alert key={idx} variant="danger">
          Error: {msg}
      </Alert>)}
    </>
  );
}

Alerts.propTypes = {
  "errors": PropTypes.array
};

export default Alerts;
