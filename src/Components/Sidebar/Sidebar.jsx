import React from "react";
import "./Sidebar.css";
import Layer1 from "../../Svg/Layer1.svg";
import Layer3 from "../../Svg/Layer3.svg";
import Layer4 from "../../Svg/Layer4.svg";
import Layer6 from "../../Svg/Layer6.svg";
import Layer7 from "../../Svg/Layer7.svg";

export default function Sidebar(props) {
  return (
    <>
      <div className="sidebar-container s-margin-top">
        <div className="s-margin-top pointer">
          <img src={Layer7} alt="logo" />
        </div>
        <div className="s-margin-top pointer">
          <img src={Layer3} alt="logo" />
        </div>
        <div className="s-margin-top pointer">
          <img src={Layer4} alt="logo" />
        </div>
        <div className="s-margin-top pointer">
          <img src={Layer1} alt="logo" />
        </div>
        <div className="s-margin-top pointer">
          <img src={Layer6} alt="logo" />
        </div>
      </div>
    </>
  );
}

