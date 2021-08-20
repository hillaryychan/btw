import {Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import React from "react";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}

export default Routes;
