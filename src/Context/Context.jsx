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
  const [project2AllProjectsGateWay1, setProject2AllProjectsGateWay1] = useState([]);
  const [project1AllGateWay1, setProject1AllGateWay1] = useState([]);
  const [project1AllGateWay2, setProject1AllGateWay2] = useState([]);

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

  function useProject2AllProjectsGateWay1 (props) {
    setProject2AllProjectsGateWay1(props)
  }

  function useProject1AllGateWay1 (props) {
    setProject1AllGateWay1(props)
  }

  function useProject1AllGateWay2 (props) {
    setProject1AllGateWay2(props)
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
    project2AllProjectsGateWay1,
    project1AllGateWay1,
    project1AllGateWay2,
    useProjectValue,
    useGetWayProjectValue,
    User,
    FNameSplit,
    LNameSplit,
    useReportsForPRojectOne,
    useReportsForPRojectTwo,
    useProject1AllProjectsGateWay1,
    useProject2AllProjectsGateWay1,
    useProject1AllGateWay1,
    useProject1AllGateWay2
   
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
