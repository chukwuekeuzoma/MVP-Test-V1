import React from "react";
import "./ProjectOneOneGateWay.css";

function ProjectOneOneGateWay(props) {
  return (
    <>
      <div className="projectOneOneGateway-container">
        <div className="projectOneOneGateway">Project 1 | Gateway 1</div>
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
      <div className="projectOneOneGateway-container">
        <div className="total">TOTAL: 10,065 USD</div>
      </div>
    </>
  );
}

export default ProjectOneOneGateWay;
