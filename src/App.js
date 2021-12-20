import PropTypes from "prop-types";
import React from "react";
import Router from "./components/Router";
import {appContext} from "./contexts/AppContext";
import {getUser} from "./utils/auth";

function App(props) {
  const user = getUser();
  return (
    <appContext.Provider value={{user}}>
      <Router init={props.init} />
    </appContext.Provider>
  );
}

App.propTypes = {
  init: PropTypes.bool
};

export default App;
