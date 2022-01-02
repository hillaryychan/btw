import React from "react";
import Router from "./components/Router";
import {appContext} from "./contexts/AppContext";
import {getUser} from "./utils/auth";

export type AppProps = {
  init: boolean;
};

export default function App({init}: AppProps): JSX.Element {
  const user = getUser();
  return (
    <appContext.Provider value={{user}}>
      <Router init={init} />
    </appContext.Provider>
  );
}
