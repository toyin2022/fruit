import React from "react";
import "./topNavbar.css";
import { MdLocationOn, MdMail } from "react-icons/md";

const TopNavbar = () => {
  return (
    <div className="end">
      <div className="topNav">
        <div className="leftTopNav">
          <div className="leftText">
            <MdLocationOn className="topNavIcons" />
            <p> 123 Street, New York</p>
          </div>
          <div className="leftText">
            <MdMail className="topNavIcons" />
            <p>Email@Example.com</p>
          </div>
        </div>
        <div className="rightTopNav">
          <p>Privacy Policy/ Terms of Use/ Sales and Refunds</p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
