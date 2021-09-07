import "../styles.css";
import PropTypes from "prop-types";
import React from "react";

function CharCounter(props) {
  return (
    <span className="Faded">
      ({props.count}/{props.maxCount})
    </span>
  );
}

CharCounter.propTypes = {
  count: PropTypes.number,
  maxCount: PropTypes.number
};

export default CharCounter;
