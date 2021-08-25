import PropTypes from "prop-types";
import React from "react";

function CharCounter(props) {
  return (
    <span style={{"color": "gray"}}>
      ({props.count}/{props.maxCount})
    </span>
  );
}

CharCounter.propTypes = {
  "count": PropTypes.number,
  "maxCount": PropTypes.number
};

export default CharCounter;
