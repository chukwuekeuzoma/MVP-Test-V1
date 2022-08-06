import React from "react";
import Select from "react-select";
import "./DashBoard.css";
function DashBoard(props) {
  return (
    <div className="dashboard-container">
      <div>
        <div className="reports">Reports</div>
        <div className="easily">Easily generate a report of your transactions</div>
      </div>
      <div className="dashboard-inner">
        <div className="custom-select d-margin-right">
          <select>
            <option value="">Select type</option>
            <option value="">Martins</option>
            <option value="">Uzoma</option>
            <option value="">Oliver</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div className="custom-select d-margin-right">
          <select>
            <option value="">Select type</option>
            <option value="">Martins</option>
            <option value="">Uzoma</option>
            <option value="">Oliver</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div className="d-margin-right">
          <label htmlFor="date" className="date-form">
            from
          </label>
          <input type="date" />
        </div>
        <div className="d-margin-right">
          <label htmlFor="date" className="date-form">
            to
          </label>
          <input type="date" />
        </div>
        <div className="generate-report d-margin-right"><div>Generate report</div></div>
      </div>
    </div>
  );
}

export default DashBoard;
