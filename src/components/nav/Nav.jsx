import React from "react";
import "./nav.css";
import lo from "../../assets/logo.png";
const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_sup">
        <img src={lo} className="logo" alt="" />
      </div>
      <div className="nav_sup">




        <ul className="nav_ul">
            <li className="nav_li">save the date</li>
            <li className="nav_li">the details</li>
            <li className="nav_li">registry</li>
            <li className="nav_li">rsvp</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
