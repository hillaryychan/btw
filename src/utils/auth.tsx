import "firebase/auth";
import App from "../App";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";

function initFirebaseAuth() {
  // Every time auth state is changed re-render app
  firebase.auth().onAuthStateChanged(() => {
    ReactDOM.render(<App init={false} />, document.getElementById("root"));
  });
}

function signUp(email: string, password: string) {
  firebase.
    auth().
    createUserWithEmailAndPassword(email, password).
    catch((error) => alert(error));
}

function signIn(email: string, password: string) {
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

export {getUser, signIn, signInWithGoogle, signOut, signUp};
export default initFirebaseAuth;
