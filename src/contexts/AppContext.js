import {createContext, useContext} from "react";

export const appContext = createContext({
  user: null
});

export default function useApp() {
  return useContext(appContext);
}
