import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import initFirebaseAuth from "./AuthUtils";

const firebaseConfig = {
  "apiKey": "AIzaSyBd0Gqvdm-tz3u34CNta6H6br11WTLpIHQ",
  "appId": "1:997630490578:web:88e0a8336f88c6959e3a0b",
  "authDomain": "by-the-way-c3675.firebaseapp.com",
  "messagingSenderId": "997630490578",
  "projectId": "by-the-way-c3675",
  "storageBucket": "by-the-way-c3675.appspot.com"
};

firebase.initializeApp(firebaseConfig);
initFirebaseAuth();

ReactDOM.render(<App init={true} />, document.getElementById("root"));
