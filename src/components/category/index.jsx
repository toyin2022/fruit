import React from "react";
import "./category.css";
import feature1 from '../../img/featur-1.jpg'
import feature2 from '../../img/featur-2.jpg'
import feature3 from '../../img/featur-3.jpg'

const Category = () => {
  return <div>
    <div className="categoryCont">
      <div className="categoryCard">
        <img 
        className="categoryImg" 
        src={feature1} 
        alt="Feature 1" 
        />
        <div className="categoryBottom"></div>
        <div className="feature">
          <p 
          style={{
            color: "white", 
            fontSize: "1.5rem"
            }}>
              Fresh Apples
          </p>
          <p 
          style={{
            color: "#545264", 
            fontSize: "1.8rem"
            }}>
              20% OFF
          </p>
        </div>
      </div>
      <div className="categoryCard">
        <img 
        className="categoryImg" 
        src={feature2} 
        alt="Feature 2" 
        />
        <div className="categoryBottom"></div>
        <div className="feature">
          <p 
          style={{
            color: "greenyellow", 
            fontSize: "1.5rem"
            }}>
              Tasty Fruits
          </p>
          <p 
          style={{
            color: "#545264", 
            fontSize: "1.8rem"}}>
              Free delivery
          </p>
        </div>
      </div>
      <div className="categoryCard">
        <img 
        className="categoryImg" 
        src={feature3} 
        alt="Feature 3" 
        />
        <div className="categoryBottom"></div>
        <div className="feature">
          <p 
          style={{
            color: "white", 
            fontSize: "1.5rem"
            }}>
              Exotic Vegitable
          </p>
          <p 
          style={{
            color: "#545264", 
            fontSize: "1.8rem"}}>
              Discount 30$
          </p>
        </div>
      </div>
    </div>
  </div>;
};

export default Category;
