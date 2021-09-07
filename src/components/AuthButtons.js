import "../styles.css";
import {Button, Navbar} from "react-bootstrap";
import {getUsername, signOut} from "../utils/auth";
import PropTypes from "prop-types";
import React from "react";
import {useHistory} from "react-router-dom";

function AuthButtons(props) {
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  if (props.init) {
    return null;
  } else if (props.signedIn) {
    return (
      <>
        <Navbar.Text className="me-2">
          Signed in as: <span className="Username">{getUsername()}</span>
        </Navbar.Text>
        <Button variant="secondary" onClick={signOut} data-testid="signout-btn">
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        variant="primary"
        className="mx-1"
        onClick={() => handleClick("signin")}
        data-testid="signin-btn"
      >
        Sign in
      </Button>
      <Button
        variant="secondary"
        className="mx-1"
        onClick={() => handleClick("signup")}
        data-testid="signup-btn"
      >
        Sign up
      </Button>
    </>
  );
}

AuthButtons.propTypes = {
  init: PropTypes.bool,
  signedIn: PropTypes.bool
};

export default AuthButtons;
