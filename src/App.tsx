import React from "react";
import Router from "src/components/Router";
import {appContext} from "src/contexts/AppContext";
import {getUser} from "src/utils/auth";

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
