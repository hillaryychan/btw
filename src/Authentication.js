import "firebase/auth";
import {Button, Navbar} from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";

function initFirebaseAuth() {
  // Every time auth state is changed re-render auth buttons
  firebase.auth().onAuthStateChanged(() => {
    ReactDOM.render(<ToggleAuthButtons />, document.getElementById("auth"));
  });
}

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  // TODO: provide error handling?
}

function signOut() {
  firebase.auth().signOut();
  // TODO: provide error handling?
}

function getUserName() {
  return firebase.auth().currentUser.displayName;
}

function isUserSignedIn() {
  return Boolean(firebase.auth().currentUser);
}

function ToggleAuthButtons() {
  if (isUserSignedIn()) {
    return (
      <>
        <Navbar.Text>Signed in as: {getUserName()}</Navbar.Text>
        <Button variant="secondary" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant="primary" onClick={() => signIn()}>
        Sign in with Google
      </Button>
    </>
  );
}

export default initFirebaseAuth;
