import Button from "react-bootstrap/Button";
import React from "react";
import {signIn} from "./AuthUtils";
import styles from "./styles";

function Welcome() {
  return (
    <>
      <h1>
        Welcome to <span style={styles.Brand}>btw</span>!
      </h1>
      <p>
        Keep track of <b>what</b> you want to talk about with <b>whom</b> you
        want to talk to.
      </p>
      <Button variant="outline-primary" onClick={signIn}>
        Sign in with Google
      </Button>
    </>
  );
}

export default Welcome;
