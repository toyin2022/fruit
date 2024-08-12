import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navCont">
        <div className="">
          <p className="fruitables">Fruitables</p>
        </div>
        <div className="menuicon">
          <div className="greenLines"></div>
          <div className="greenLines"></div>
          <div className="greenLines"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
