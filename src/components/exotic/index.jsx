import React from "react";
import "./Exotic.css";
import banner1 from '../../img/baner-1.png'

const Exotic = () => {
  return <div>
    <div className="exoticCont">
      <div className="exoticText">
        <p 
        style={{
          color: "white", 
          fontSize: "4rem", 
          fontWeight: "bold"
          }}>
            Fresh Exotic Fruits
        </p>
        <p 
        style={{
          color: "#545264", 
          fontSize: "4rem"
          }}>
            in Our Store
        </p>
        <p 
        style={{
          color: "#545264", 
          fontSize: "1.1rem"
          }}>
            The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
        </p>
        <button 
        style={{
          color: "#545264", 
          fontSize: "1rem",
          border: "2px solid white",
          padding: "1rem 3rem",
          borderRadius: "50px",
          marginTop: "2rem",
          transition: "all 0.5s"
          }}>
            BUY
        </button>
      </div>
      <div className="exoticFruit">
        <div className="priceTag">
          <h1 
          className="weight"
          style={{
            fontSize: "6rem"
          }}
          >
            1
          </h1>
          <div 
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "2rem",
          }}
          >
            <span>50$</span>
            <span>kg</span>
          </div>
        </div>
        <img 
        src={banner1} 
        alt="banner1" 
        />
      </div>
    </div>
  </div>;
};

export default Exotic;
