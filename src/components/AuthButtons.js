import "../styles.css";
import {Button, Navbar} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import {signOut} from "../utils/auth";
import useApp from "../contexts/AppContext";
import {useHistory} from "react-router-dom";

function AuthButtons(props) {
  const {user} = useApp();
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  if (props.init) {
    return null;
  } else if (user) {
    return (
      <>
        <Navbar.Text className="me-2">
          Signed in as: <span className="Username">{user.displayName || user.email || "Unknown User"}</span>
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
  init: PropTypes.bool
};

export default AuthButtons;
