import React from "react";
import "./Header.css";
import bcolor1MVP from "../../Svg/b-color1MVP.svg";
import GroupMVp from "../../Svg/GroupMVp.svg";

export default function Header(props) {
  return (
    <>
      <div className="header-container">
        <div className="h-margin-left">
          <img src={bcolor1MVP} alt="logo" />
          <img src={GroupMVp} alt="logo" className="h-margin-left"/>
        </div>
        <div className="h-margin-right d-f">
          <div className="h-margin-right jd">JD</div>
          <div className="john-doe">John Doe</div>
        </div>
      </div>
    </>
  );
}
