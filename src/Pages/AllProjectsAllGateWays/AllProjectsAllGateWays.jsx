import React, { useState } from "react";
import "./AllProjectsAllGateWays.css";

function AllProjectsAllGateWays(props) {
  const [openProject, setOpenProject] = useState("");

  const projectOneOpen = () => {
    setOpenProject("project1");
  };

  const projectTwoOpen = () => {
    setOpenProject("project2");
  };

  return (
    <>
      <div className="allprojectsallgateways-container">
        <div className="allprojectsallgateways">
          All projects | All gateways
        </div>
        <div className="project-container" onClick={projectOneOpen}>
          <div>Project 1</div>
          <div>TOTAL: 10,065 USD</div>
        </div>
        <div
          className={
            openProject === "project1"
              ? "table-container-show"
              : "table-container"
          }
        >
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Gateway</th>
                <th>Transaction ID</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="project-container" onClick={projectTwoOpen}>
          <div>Project 2</div>
          <div>TOTAL: 6,065 USD</div>
        </div>
        <div
          className={
            openProject === "project2"
              ? "table-container-show"
              : "table-container"
          }
        >
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Gateway</th>
                <th>Transaction ID</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
              <tr>
                <td>01/21/2021</td>
                <td>Gateway 2</td>
                <td>a732b</td>
                <td>3964 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="allprojectsallgateways-container">
          <div className="total">TOTAL: 10,065 USD</div>
      </div>
    </>
  );
}

export default AllProjectsAllGateWays;
