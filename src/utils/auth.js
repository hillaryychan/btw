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

function signUp(email, password) {
  firebase.
    auth().
    createUserWithEmailAndPassword(email, password).
    catch((error) => alert(error));
}

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signInWithGoogle() {
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

function getUser() {
  return firebase.auth().currentUser;
}

function getUserId() {
  return firebase.auth().currentUser.uid;
}

export {
  getUser,
  getUserId,
  signIn,
  signInWithGoogle,
  signOut,
  signUp
};
export default initFirebaseAuth;
