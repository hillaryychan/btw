import Button from "react-bootstrap/Button";
import React from "react";
import styles from "../utils/styles";
import {useHistory} from "react-router-dom";

function Welcome() {
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <div style={{...styles.Center, ...styles.CenterText}}>
      <h1>
        Welcome to <span style={styles.Brand}>btw</span>!
      </h1>
      <p>
        Keep track of <b>what</b> you want to talk about with <b>whom</b> you
        want to talk to.
      </p>
      <Button variant="outline-primary" onClick={() => handleClick("signup")}>
        Get Started
      </Button>
    </div>
  );
}

export default Welcome;
