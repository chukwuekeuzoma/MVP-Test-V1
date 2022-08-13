import React, { useState, useEffect, useContext } from "react";
import {
  AllProjectOneGateWay,
  NoReports,
  AllProjectsAllGateWays,
  ProjectOneOneGateWay
} from "../Pages";
import { Context } from "../Context/Context";

function Screen(props) {
  const { projectValueGlobal, GateWayValueGlobal } = useContext(Context);

  console.log("projectValueGlobal", projectValueGlobal);
  console.log("GateWayValueGlobal", GateWayValueGlobal);

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
      ) : (
        <NoReports />
      )}
    </>
  );
}

export default Screen;
