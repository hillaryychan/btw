import PropTypes from "prop-types";
import React from "react";
import styles from "../utils/styles";

function CharCounter(props) {
  return (
    <span style={styles.Faded}>
      ({props.count}/{props.maxCount})
    </span>
  );
}

CharCounter.propTypes = {
  count: PropTypes.number,
  maxCount: PropTypes.number
};

export default CharCounter;
