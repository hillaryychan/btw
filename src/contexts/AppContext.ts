import {createContext, useContext} from "react";
import firebase from "firebase/app";

export type AppContextType = {
  user: firebase.User | null;
};

export const appContext = createContext<AppContextType>({
  user: null
});

export default function useApp(): AppContextType {
  return useContext(appContext);
}
