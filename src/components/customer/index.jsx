import React from "react";
import "./Customer.css";
import { FaUsers } from "react-icons/fa";
const Customer = () => {
  const customerCards = [
    {
      title: "SATISFIED CUSTOMERS",
      num: "1963"
    },
    {
      title: "QUALITY OF SERVICE",
      num: "99%"
    },
    {
      title: "QUALITY CERTIFICATES",
      num: "33"
    },
    {
      title: "AVAILABLE PRODUCTS",
      num: "789"
    },
  ]
  return <div>
    <div className="customerCont">
      <div className="customerCardCont">
      {customerCards.map((item)=>(
        <div className="customerCard">
          <FaUsers className="icon"/>
          <p className="title">{item.title}</p>
          <span className="num">{item.num}</span>
        </div>
      ))}
      </div>
    </div>
  </div>;
};

export default Customer;
