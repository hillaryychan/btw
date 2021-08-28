import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import PropTypes from "prop-types";
import React from "react";
import Routes from "./components/Routes";
import {isUserSignedIn} from "./utils/auth";

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
  init: PropTypes.bool
};

export default App;
