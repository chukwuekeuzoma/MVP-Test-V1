import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
import "./DashBoard.css";
import { TailSpin } from "react-loader-spinner";

function DashBoard(props) {
  const {
    useProjectValue,
    useGetWayProjectValue,
    User,
    FNameSplit,
    LNameSplit,
    useReportsForPRojectOne,
    useReportsForPRojectTwo,
    useProject1AllProjectsGateWay1
  } = useContext(Context);

  const [project, setProject] = useState([]);
  const [projectValue, setProjectValue] = useState("");
  const [gateWayValue, setGateWayValue] = useState("");
  const [loaderCheck, setLoaderCheck] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [gateWays, setGetWays] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [project1Id, setProject1Id] = useState("");
  const [project2Id, setProject2Id] = useState("");
  const [gateWay1Id, setGateWay1Id] = useState("");
  const [gateWay2Id, setGateWay2Id] = useState("");
  

  const reportValuesForPRojectOne = {
    from: fromDate,
    to: toDate,
    projectId: project1Id,
    gatewayId: gateWay1Id
  };

  const reportValuesForPRojectTwo = {
    from: fromDate,
    to: toDate,
    projectId: project2Id,
    gatewayId: gateWay2Id
  };

  const Project1AllProjectsGateWay1 = {
    from: fromDate,
    to: toDate,
    projectId: project1Id,
    gatewayId: gateWay1Id
  }

  const Project2AllProjectsGateWay1 = {
    from: fromDate,
    to: toDate,
    projectId: project2Id,
    gatewayId: gateWay1Id
  }

  const headersone = {
    "Content-Type": "application/json"
  };

  const getReportsForPRojectOne = async () => {
    try {
      setLoaderCheck(true);
      const response = await axios.post(
        "report",
        JSON.stringify(reportValuesForPRojectOne),
        {
          headers: headersone
        }
      );
      useReportsForPRojectOne(response.data.data);
      setSuccess("report gotten");
      setError("");
    } catch (e) {
      setError(e);
      setSuccess("");
    }
    setLoaderCheck(false);
  };

  const getReportsForPRojectTwo = async () => {
    try {
      setLoaderCheck(true);
      const response = await axios.post(
        "report",
        JSON.stringify(reportValuesForPRojectTwo),
        {
          headers: headersone
        }
      );
      useReportsForPRojectTwo(response.data.data);
      setSuccess("report gotten");
      setError("");
    } catch (e) {
      setError(e);
      setSuccess("");
    }
    setLoaderCheck(false);
  };

  const getproject1AllProjectsGateWay1 = async () => {
    try {
      setLoaderCheck(true);
      const response = await axios.post(
        "report",
        JSON.stringify(Project1AllProjectsGateWay1),
        {
          headers: headersone
        }
      );
      useProject1AllProjectsGateWay1(response.data.data);
      setSuccess("report gotten");
      setError("");
    } catch (e) {
      setError(e);
      setSuccess("");
    }
    setLoaderCheck(false);
  };

  const getProjects = async () => {
    let response = await axios.get("projects");
    setProject(response.data.data);
    setProject1Id(response.data.data[0]["projectId"]);
    setProject2Id(response.data.data[1]["projectId"]);
  };

  const getUsers = async () => {
    let response = await axios.get("users");
    User(response.data.data[0]);
    FNameSplit(response.data.data[0].firstName.charAt(0));
    LNameSplit(response.data.data[0].lastName.charAt(0));
  };

  const getGateWays = async () => {
    let response = await axios.get("gateways");
    setGetWays(response.data.data);
    setGateWay1Id(response.data.data[0]["gatewayId"]);
    setGateWay2Id(response.data.data[1]["gatewayId"]);
  };

  useEffect(() => {
    getProjects();
    getGateWays();
    getUsers();
  }, []);

  const collectValue = () => {
    useProjectValue(projectValue);
    useGetWayProjectValue(gateWayValue);
    getReportsForPRojectOne();
    getReportsForPRojectTwo();
    getproject1AllProjectsGateWay1();
  };

  // console.log("from",fromDate);
  // console.log("from",toDate);
  // console.log("project1Id",project1Id)
  // console.log("project2Id",project2Id)
  // console.log("gateWay1Id",gateWay1Id)
  // console.log("gateWay2Id",gateWay2Id)

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
          <select onChange={e => setGateWayValue(e.target.value)}>
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
          <input
            type="date"
            min="2021-01-01"
            max="2021-12-31"
            onChange={e => setFromDate(e.target.value)}
          />
        </div>
        <div className="d-margin-right">
          <label htmlFor="date" className="date-form">
            to
          </label>
          <input
            type="date"
            min="2021-01-01"
            max="2021-12-31"
            onChange={e => setToDate(e.target.value)}
          />
        </div>
        <div className="generate-report d-margin-right" onClick={collectValue}>
          <div>
            {loaderCheck ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                <TailSpin color="#ffff" height={10} width={10} />
              </div>
            ) : (
              <div>Generate report</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
