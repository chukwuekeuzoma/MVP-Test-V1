import React, { useState, useContext } from "react";
import "./AllGateWaysProject1.css";
import { Context } from "../../Context/Context";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend);

function AllGateWaysProject1(props) {
  const { project1AllGateWay1, project1AllGateWay2 } = useContext(Context);

  const [openGateWay, setOpenGateWay] = useState("");

  const gateWayOneOpen = () => {
    setOpenGateWay("gateway1");
  };

  const gateWayTwoOpen = () => {
    setOpenGateWay("gateway2");
  };

  //sum of project1AllProjectsGateWay1
  const sumTotalOfproject1AllGateWay1 = project1AllGateWay1.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  //sum of project2AllProjectsGateWay1
  const sumTotalOfproject1AllGateWay2 = project1AllGateWay2.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  // sum of both
  const sumTotal =
    sumTotalOfproject1AllGateWay1 + sumTotalOfproject1AllGateWay2;

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
          sumTotalOfproject1AllGateWay1 * 0.01,
          sumTotalOfproject1AllGateWay2 * 0.01
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
    <div className="allgatewayproject1-main-container">
      <div>
        <div className="allgatewayproject1-container">
          <div className="allgatewayproject1">Project 1 | All Gateways</div>
          <div className="project-container" onClick={gateWayOneOpen}>
            <div>Gateway 1</div>
            <div>
              {" "}
              TOTAL:&nbsp;
              {formatter.format(sumTotalOfproject1AllGateWay1)}
            </div>
          </div>
          <div
            className={
              openGateWay === "gateway1"
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
                {project1AllGateWay1.map(
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
          <div className="project-container" onClick={gateWayTwoOpen}>
            <div>Gateway 2</div>
            <div>
              TOTAL: &nbsp;
              {formatter.format(sumTotalOfproject1AllGateWay2)}
            </div>
          </div>
          <div
            className={
              openGateWay === "gateway2"
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
                {project1AllGateWay2.map(
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
        <div className="allgatewayproject1-total-container">
          <div className="total">
            PROJECT TOTAL: &nbsp;{formatter.format(sumTotal)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllGateWaysProject1;
