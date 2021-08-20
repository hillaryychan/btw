import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
