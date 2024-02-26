import React, { createContext, useEffect, useReducer } from "react";
import {AppReducer} from "../reducers/AppReducer";

export const AppContext = createContext({ appState: {}, appDispatch: {} });

const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(AppReducer, {info:{}});
  useEffect(()=>{
      console.log({appState});
  },[appState])
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;