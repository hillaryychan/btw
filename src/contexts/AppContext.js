import {createContext, useContext} from "react";

// import noop from "lodash/noop";

export const appContext = createContext({
  currentUser: null // ,
  // notes: [],
  // addNote: noop,
  // deleteNote: noop,
  // updateNote: noop
});

export default function useApp() {
  return useContext(appContext);
}
