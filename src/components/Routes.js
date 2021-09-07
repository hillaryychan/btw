import {Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import PropTypes from "prop-types";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home init={props.init} signedIn={props.signedIn} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        {props.signedIn
          ? <Redirect to="/" />
          : <SignUp />}
      </Route>
      <Route path="/signin">
        {props.signedIn
          ? <Redirect to="/" />
          : <SignIn />}
      </Route>
    </Switch>
  );
}

Routes.propTypes = {
  init: PropTypes.bool,
  signedIn: PropTypes.bool
};

export default Routes;
