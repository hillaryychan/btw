import {BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
