import React, { useState, createContext } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  const [projectValueGlobal, setprojectValueGlobal] = useState("");
  const [GateWayValueGlobal, setgatewayValueGlobal] = useState("");
  const [firstNameSplit, setFirstNameSplit] = useState([]);
  const [lastNameSplit, setLastNameSplit] = useState([]);
  const [userGlobal, setUserGlobal] = useState([]);
  const [reportsForPRojectOne, setReportsForPRojectOne] = useState([]);
  const [reportsForPRojectTwo, setReportsForPRojectTwo] = useState([]);
  const [project1AllProjectsGateWay1, setProject1AllProjectsGateWay1] = useState([]);

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

  function useReportsForPRojectOne (props) {
    setReportsForPRojectOne(props)
  }

  function useReportsForPRojectTwo (props) {
    setReportsForPRojectTwo(props)
  }

  function useProject1AllProjectsGateWay1 (props) {
    setProject1AllProjectsGateWay1(props)
  }

  const value = {
    projectValueGlobal,
    GateWayValueGlobal,
    userGlobal,
    firstNameSplit,
    lastNameSplit,
    reportsForPRojectOne,
    reportsForPRojectTwo,
    project1AllProjectsGateWay1,
    useProjectValue,
    useGetWayProjectValue,
    User,
    FNameSplit,
    LNameSplit,
    useReportsForPRojectOne,
    useReportsForPRojectTwo,
    useProject1AllProjectsGateWay1
   
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
