import "../styles.css";
import {Button, Navbar} from "react-bootstrap";
import React from "react";
import {signOut} from "../utils/auth";
import useApp from "../contexts/AppContext";
import {useHistory} from "react-router-dom";

export type AuthButtonsProps = {
  init: boolean;
}

export default function AuthButtons({init}: AuthButtonsProps) {
  const {user} = useApp();
  const history = useHistory();

  function handleClick(path: string) {
    history.push(path);
  }

  if (init) {
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
