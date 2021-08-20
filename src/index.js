import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig);

const concept = "by the way";

function App() {
  return <div>btw - {concept}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
