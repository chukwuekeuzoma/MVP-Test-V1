import React from "react";
import "./NoReports.css";
import Group275 from "../../Svg/Group275.svg";

function NoReports(props) {
  return (
    <div className="no-reports-container">
      <div className="sub-no-reports">
        <div className="no-reports">No reports</div>
        <div className="currently">
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </div>
        <img src={Group275} alt="logo" />
      </div>
    </div>
  );
}

export default NoReports;
