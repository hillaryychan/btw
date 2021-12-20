import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import PropTypes from "prop-types";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Router(props) {
  return (
    <BrowserRouter>
      <Navigation init={props.init} />
      <Switch>
        <Route exact path="/">
          <Home init={props.init} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

Router.propTypes = {
  init: PropTypes.bool
};

export default Router;
