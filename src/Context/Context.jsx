import React, { useState, createContext } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  const [projectValueGlobal, setprojectValueGlobal] = useState("");
  const [GateWayValueGlobal, setgatewayValueGlobal] = useState("")

  function useProjectValue(props) {
    setprojectValueGlobal(props);
  }

  function useGetWayProjectValue(props) {
    setgatewayValueGlobal(props)
  }

  const value = {
    projectValueGlobal,
    GateWayValueGlobal,
    useProjectValue,
    useGetWayProjectValue,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
