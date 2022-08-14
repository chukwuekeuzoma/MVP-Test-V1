import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import "./Header.css";
import bcolor1MVP from "../../Svg/b-color1MVP.svg";
import GroupMVp from "../../Svg/GroupMVp.svg";

export default function Header(props) {
  const { userGlobal, firstNameSplit, lastNameSplit } = useContext(Context);
  const firstName = userGlobal.firstName;
  const lastName = userGlobal.lastName;
  const firstLetterOfFirstName = firstNameSplit[0];
  const firstLetterOfLastName = lastNameSplit[0];

  return (
    <>
      <div className="header-container">
        <div className="h-margin-left">
          <img src={bcolor1MVP} alt="logo" />
          <img src={GroupMVp} alt="logo" className="h-margin-left" />
        </div>
        <div className="h-margin-right d-f">
          <div className="h-margin-right jd">
            {firstLetterOfFirstName}
            {firstLetterOfLastName}
          </div>
          <div className="john-doe">
            {firstName} {lastName}
          </div>
        </div>
      </div>
    </>
  );
}
