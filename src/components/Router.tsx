import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "src/pages/About";
import Home from "src/pages/Home";
import Navigation from "src/components/Navigation";
import React from "react";
import SignIn from "src/pages/SignIn";
import SignUp from "src/pages/SignUp";

export type RouterProps = {
  init: boolean;
};

export default function Router({init}: RouterProps): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation init={init} />
      <Switch>
        <Route exact path="/">
          <Home init={init} />
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
