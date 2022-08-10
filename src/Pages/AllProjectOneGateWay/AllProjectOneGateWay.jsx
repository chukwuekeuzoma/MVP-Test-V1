import React, { useState, useEffect, useContext } from "react";
import "./AllProjectOneGateWay.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function AllProjectOneGateWay(props) {
  const [openProject, setOpenProject] = useState("");
  const [viewProject, setViewProject] = useState("NoReport");

  const projectOneOpen = () => {
    setOpenProject("project1");
  };

  const projectTwoOpen = () => {
    setOpenProject("project2");
  };

  const data = {
    labels: ["Project 1", "Project 2", "Project 3", "Project 4"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#A259FF", "#F24E1E", "#FFC107", " #6497B1"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
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
      </div>
      <div className="doughnut-container">
        <Doughnut data={data} options={option} />
        <div className="allprojectoneonegateway-total-container">
          <div className="total">TOTAL: 10,065 USD</div>
        </div>
      </div>
    </div>
  );
}

export default AllProjectOneGateWay;
