import {Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import PropTypes from "prop-types";
import React from "react";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home init={props.init} signedIn={props.signedIn} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}

Routes.propTypes = {
  "init": PropTypes.bool,
  "signedIn": PropTypes.bool
};

export default Routes;
