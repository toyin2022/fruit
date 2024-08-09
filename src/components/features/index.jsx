import React from "react";
import { FaUserShield } from "react-icons/fa";

import { FaCarSide } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";

import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <FaCarSide size={40} />,
      title: "Free Shipping",
      desc: "Free on order over $300",
    },
    {
      icon: <FaUserShield size={40} />,
      title: "Security Payment",
      desc: "100% security payment",
    },
    {
      icon: <GoArrowSwitch size={40} />,
      title: "30 Day Return",
      desc: "30 day money guarantee",
    },
    {
      icon: <MdOutlineLocalPhone size={40} />,
      title: "24/7 Support",
      desc: "Support every time fast",
    },
  ];
  return (
    <div className="featurecom">
      <div className="featureSection">
        {features.map((feature, index) => (
          <div key={index} className="featureCard">
            <div className="featuretop">
              <div className="round">
                <div className="iconloci2">{feature.icon}</div>
                <div className="rect"></div>
              </div>
              {/* <div className="locicon">
              <FaLocationPin className="iconloci" />
              <FaCarSide className="iconloci2" />
            </div> */}
            </div>
            <div className="featurebottom">
              <p className="featuretitle">{feature.title}</p>
              <p className="featuredesc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
