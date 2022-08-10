import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
import "./DashBoard.css";

function DashBoard(props) {
  const { useProjectValue,useGetWayProjectValue } = useContext(Context);

  const [project, setProject] = useState([]);
  const [projectValue, setProjectValue] = useState("");
  const [gateWayValue, setGateWayValue] = useState("");
  const [loaderCheck, setLoaderCheck] = useState(false);
  const [gateWays, setGetWays] = useState([]);

  const getProjects = async () => {
    let response = await axios.get("projects");
    setProject(response.data.data);
  };

  const getGateWays = async () => {
    let response = await axios.get("gateways");
    setGetWays(response.data.data);
  };

  useEffect(() => {
    getProjects();
    getGateWays();
  }, []);

  const collectValue = () => {
    useProjectValue(projectValue);
    useGetWayProjectValue(gateWayValue)
  };

  // console.log();

  return (
    <div className="dashboard-container">
      <div>
        <div className="reports">Reports</div>
        <div className="easily">
          Easily generate a report of your transactions
        </div>
      </div>
      <div className="dashboard-inner">
        <div className="custom-select d-margin-right">
          <select onChange={e => setProjectValue(e.target.value)}>
            <option value="Select project">Select project</option>
            <option value="All Project">All Project</option>
            {project.map(({ name }, index) => (
              <option value={name} key={index}>
                {name}
              </option>
            ))}
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div className="custom-select d-margin-right">
          <select onChange={ e => setGateWayValue(e.target.value)}>
            <option value="Select GateWay">Select GateWay</option>
            <option value="All Gateways">All Gateways</option>
            {gateWays.map(({ name }, index) => (
              <option value={name} key={index}>
                {name}
              </option>
            ))}
          </select>
          <span className="custom-arrow-two"></span>
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
        <div className="generate-report d-margin-right" onClick={collectValue}>
          <div>Generate report</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
