import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import moment from "moment";
import "./ProjectOneOneGateWay.css";

function ProjectOneOneGateWay(props) {
  const { reportsForPRojectOne } = useContext(Context);

  //sum of Project1
  const sumTotalUnProjectOneAmount = reportsForPRojectOne.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return (
    <>
      <div className="projectOneOneGateway-container">
        <div className="projectOneOneGateway">Project 1 | Gateway 1</div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {reportsForPRojectOne.map(
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
      <div className="projectOneOneGateway-container">
        <div className="total">
          TOTAL:&nbsp;
          {formatter.format(sumTotalUnProjectOneAmount)}
        </div>
      </div>
    </>
  );
}

export default ProjectOneOneGateWay;
