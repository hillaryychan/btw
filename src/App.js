import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import PropTypes from "prop-types";
import React from "react";
import Routes from "./components/Routes";
import {appContext} from "./contexts/AppContext";
import {getUser} from "./utils/auth";

function App(props) {
  const user = getUser();
  return (
    <appContext.Provider value={{user}}>
      <BrowserRouter>
        <Navigation init={props.init} />
        <Routes init={props.init} />
      </BrowserRouter>
    </appContext.Provider>
  );
}

App.propTypes = {
  init: PropTypes.bool
};

export default App;
