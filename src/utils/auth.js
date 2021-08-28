import "firebase/auth";
import App from "../App";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";

function initFirebaseAuth() {
  // Every time auth state is changed re-render app
  firebase.auth().onAuthStateChanged(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.
    auth().
    signInWithPopup(provider).
    catch((error) => alert(error));
}

function signOut() {
  firebase.
    auth().
    signOut().
    catch((error) => alert(error));
}

function getUsername() {
  return firebase.auth().currentUser.displayName;
}

function isUserSignedIn() {
  return Boolean(firebase.auth().currentUser);
}

export {getUsername, isUserSignedIn, signIn, signOut};
export default initFirebaseAuth;
