import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export type RouterProps = {
  init: boolean;
};

export default function Router({init}: RouterProps): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation init={init} />
      <Routes>
        <Route path="/" element={<Home init={init} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
