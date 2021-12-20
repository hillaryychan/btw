import {createContext, useContext} from "react";

export const appContext = createContext({
  currentUser: null
});

export default function useApp() {
  return useContext(appContext);
}
