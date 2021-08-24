import {BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation";
import PropTypes from "prop-types";
import React from "react";
import Routes from "./Routes";
import {isUserSignedIn} from "./AuthUtils";

function App(props) {
  const isSignedIn = isUserSignedIn();
  return (
    <BrowserRouter>
      <Navigation init={props.init} signedIn={isSignedIn} />
      <Routes init={props.init} signedIn={isSignedIn} />
    </BrowserRouter>
  );
}

App.propTypes = {
  "init": PropTypes.bool
};

export default App;
