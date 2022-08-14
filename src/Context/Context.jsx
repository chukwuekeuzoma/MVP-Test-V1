import React, { useState, createContext } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  const [projectValueGlobal, setprojectValueGlobal] = useState("");
  const [GateWayValueGlobal, setgatewayValueGlobal] = useState("");
  const [firstNameSplit, setFirstNameSplit] = useState([]);
  const [lastNameSplit, setLastNameSplit] = useState([]);
  const [userGlobal, setUserGlobal] = useState([]);

  function useProjectValue(props) {
    setprojectValueGlobal(props);
  }

  function useGetWayProjectValue(props) {
    setgatewayValueGlobal(props);
  }

  function User(props) {
    setUserGlobal(props);
  }

  function FNameSplit(props) {
    setFirstNameSplit(props)
  }

  function LNameSplit (props) {
    setLastNameSplit(props)
  }

  const value = {
    projectValueGlobal,
    GateWayValueGlobal,
    userGlobal,
    firstNameSplit,
    lastNameSplit,
    useProjectValue,
    useGetWayProjectValue,
    User,
    FNameSplit,
    LNameSplit
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
