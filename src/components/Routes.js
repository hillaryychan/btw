import {Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import PropTypes from "prop-types";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import useApp from "../contexts/AppContext";

function Routes(props) {
  const {user} = useApp();
  return (
    <Switch>
      <Route exact path="/">
        <Home init={props.init} signedIn={Boolean(user)} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        {user
          ? <Redirect to="/" />
          : <SignUp />}
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  );
}

Routes.propTypes = {
  init: PropTypes.bool
};

export default Routes;
