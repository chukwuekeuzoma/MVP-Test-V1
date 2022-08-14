import React, { useState, useContext } from "react";
import "./AllProjectsAllGateWays.css";
import { Context } from "../../Context/Context";
import moment from "moment";

function AllProjectsAllGateWays(props) {
  const { reportsForPRojectOne, reportsForPRojectTwo } = useContext(Context);
  const [openProject, setOpenProject] = useState("");

  const projectOneOpen = () => {
    setOpenProject("project1");
  };

  const projectTwoOpen = () => {
    setOpenProject("project2");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

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
              {reportsForPRojectOne.map(
                ({ amount, created, paymentId }, index) => (
                  <tr key={index}>
                    <td>{moment(created).format("MM-DD-YYYY")}</td>
                    <td>Gateway {index + 1}</td>
                    <td>{paymentId}</td>
                    <td>{formatter.format(amount)}</td>
                  </tr>
                )
              )}
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
              {reportsForPRojectTwo.map(({ amount, created, paymentId }, index) => (
                <tr key={index}>
                  <td>{moment(created).format("MM-DD-YYYY")}</td>
                  <td>Gateway {index + 1}</td>
                  <td>{paymentId}</td>
                  <td>{formatter.format(amount)}</td>
                </tr>
              ))}
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
