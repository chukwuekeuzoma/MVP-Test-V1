import React, { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import "./AllProjectOneGateWay.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend);

function AllProjectOneGateWay(props) {
  const {
    project1AllProjectsGateWay1,
    project2AllProjectsGateWay1
  } = useContext(Context);

  const [openProject, setOpenProject] = useState("");

  const projectOneOpen = () => {
    setOpenProject("project1");
  };

  const projectTwoOpen = () => {
    setOpenProject("project2");
  };

  //sum of project1AllProjectsGateWay1
  const sumTotalOfproject1AllProjectsGateWay1 = project1AllProjectsGateWay1.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  //sum of project2AllProjectsGateWay1
  const sumTotalOfproject2AllProjectsGateWay1 = project2AllProjectsGateWay1.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  // sum of both
  const sumTotal = sumTotalOfproject1AllProjectsGateWay1 + sumTotalOfproject2AllProjectsGateWay1;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const data = {
    labels: ["Project 1", "Project 2"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          sumTotalOfproject1AllProjectsGateWay1 * 0.01,
          sumTotalOfproject2AllProjectsGateWay1 * 0.01
        ],
        backgroundColor: ["#A259FF", "#F24E1E", "#FFC107", " #6497B1"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 0
      }
    ]
  };

  const option = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
          padding: 15
        }
      }
    }
  };

  return (
    <div className="allprojectonegateway-main-container">
      <div>
        <div className="allprojectonegateway-container">
          <div className="allprojectonegateway">All projects | Gateway 1</div>
          <div className="project-container" onClick={projectOneOpen}>
            <div>Project 1</div>
            <div>
              {" "}
              TOTAL:&nbsp;
              {formatter.format(sumTotalOfproject1AllProjectsGateWay1)}
            </div>
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
                  <th>Transaction ID</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {project1AllProjectsGateWay1.map(
                  ({ amount, created, paymentId }, index) => (
                    <tr key={index}>
                      <td>{moment(created).format("MM-DD-YYYY")}</td>
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
            <div>
              TOTAL: &nbsp;
              {formatter.format(sumTotalOfproject2AllProjectsGateWay1)}
            </div>
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
                  <th>Transaction ID</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {project2AllProjectsGateWay1.map(
                  ({ amount, created, paymentId }, index) => (
                    <tr key={index}>
                      <td>{moment(created).format("MM-DD-YYYY")}</td>
                      <td>{paymentId}</td>
                      <td>{formatter.format(amount)}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="doughnut-container">
        <Doughnut data={data} options={option} />
        <div className="allprojectoneonegateway-total-container">
          <div className="total">GATEWAY TOTAL: &nbsp;{formatter.format(sumTotal)}</div>
        </div>
      </div>
    </div>
  );
}

export default AllProjectOneGateWay;
