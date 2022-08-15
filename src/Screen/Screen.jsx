import React, { useContext } from "react";
import {
  AllProjectOneGateWay,
  NoReports,
  AllProjectsAllGateWays,
  ProjectOneOneGateWay,
  AllGateWaysProject1
} from "../Pages";
import { Context } from "../Context/Context";

function Screen(props) {
  const { projectValueGlobal, GateWayValueGlobal } = useContext(Context);

  return (
    <>
      {projectValueGlobal === "All Project" &&
      GateWayValueGlobal === "All Gateways" ? (
        <AllProjectsAllGateWays />
      ) : projectValueGlobal === "All Project" &&
        GateWayValueGlobal === "Gateway 1" ? (
        <AllProjectOneGateWay />
      ) : projectValueGlobal === "Project 1" &&
        GateWayValueGlobal === "Gateway 1" ? (
        <ProjectOneOneGateWay />
      ) : projectValueGlobal === "Project 1" &&
        GateWayValueGlobal === "All Gateways" ? (
        <AllGateWaysProject1 />
      ) : (
        <NoReports />
      )}
    </>
  );
}

export default Screen;
