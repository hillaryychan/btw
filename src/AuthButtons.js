import {Button, Navbar} from "react-bootstrap";
import {getUserName, signIn, signOut} from "./utils/auth";
import PropTypes from "prop-types";
import React from "react";
import styles from "./utils/styles";

function AuthButtons(props) {
  if (props.init) {
    return null;
  } else if (props.signedIn) {
    return (
      <>
        <Navbar.Text className="me-2">
          Signed in as: <span style={styles.Username}>{getUserName()}</span>
        </Navbar.Text>
        <Button variant="secondary" onClick={signOut}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <Button variant="primary" onClick={signIn}>
      Sign in with Google
    </Button>
  );
}

AuthButtons.propTypes = {
  "init": PropTypes.bool,
  "signedIn": PropTypes.bool
};

export default AuthButtons;
