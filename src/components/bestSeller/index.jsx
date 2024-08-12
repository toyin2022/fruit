import React from "react";
import "./BestSeller.css";
import bestProduct1 from '../../img/best-product-1.jpg'
import bestProduct2 from '../../img/best-product-2.jpg'
import bestProduct3 from '../../img/best-product-3.jpg'
import bestProduct4 from '../../img/best-product-4.jpg'
import bestProduct5 from '../../img/best-product-5.jpg'
import bestProduct6 from '../../img/best-product-6.jpg'
import { RiShoppingBagFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const BestSeller = () => {
  const productCards = [
    {
      img: bestProduct1,
      title: 'Organic Tomato',
      price: '3.12$'
    },
    {
      img: bestProduct2,
      title: 'Organic Tomato',
      price: '3.12$'
    },
    {
      img: bestProduct3,
      title: 'Organic Tomato',
      price: '3.12$'
    },
    {
      img: bestProduct4,
      title: 'Organic Tomato',
      price: '3.12$'
    },
    {
      img: bestProduct5,
      title: 'Organic Tomato',
      price: '3.12$'
    },
    {
      img: bestProduct6,
      title: 'Organic Tomato',
      price: '3.12$'
    }
  ]
  const extraCards = productCards.slice(0,4)
  return <div>
    <div className="bestsellerCont">
      <div className="intro">
        <p className="bestProducts">Bestseller Products</p>
        <p className="description">Latin words, combined with a handful of  model sentence structures, to generate Lorem Ipsum which looks   reasonable.</p>
      </div>
      <div className="products">
        {productCards.map((item)=>(
          <div className="productCard">
            <img src={item.img} alt="bestProduct1" />
            <div className="details">
              <p
              style={{
                fontWeight: "bold",
                color: "#5f5f5f",
                fontSize: "1.2rem",
                transition: "all 0.5s"
              }}
              >
                {item.title}
              </p>
              <div className="" style={{display: "flex"}}>
                 <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
                 <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
                 <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
                 <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
                 <FaStar style={{color: "gray", fontSize: "1.3rem"}}/> 
                 </div>
              <p 
              style={{
                fontSize: "1.3rem",
                color: "#5f5f5f",
                fontWeight: "bold"
                }}>
                  {item.price}
              </p>
              <button 
              style={{
                display: "flex", 
                gap: "0.5rem",
                fontSize: "1.2rem", 
                color: "greenyellow",
                alignItems: "center",
                border: "1px solid orange",
                borderRadius: "25px",
                padding: "4px 12px",
                transition: "all 0.5s"
                }}> 
                 <span><RiShoppingBagFill /></span> Add to cart
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="extraProducts">
        {extraCards.map((item)=>(
          <div className="productCard">
          <img src={item.img} alt="bestProduct1" />
          <div className="details">
            <p
            style={{
              fontWeight: "bold",
              color: "#5f5f5f",
              fontSize: "1.2rem",
              transition: "all 0.5s"
            }}
            >
              {item.title}
            </p>
            <div className="" style={{display: "flex"}}>
               <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
               <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
               <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
               <FaStar style={{color: "greenyellow", fontSize: "1.3rem"}}/> 
               <FaStar style={{color: "gray", fontSize: "1.3rem"}}/> 
               </div>
            <p 
            style={{
              fontSize: "1.3rem",
              color: "#5f5f5f",
              fontWeight: "bold"
              }}>
                {item.price}
            </p>
            <button 
            style={{
              display: "flex", 
              gap: "0.5rem",
              fontSize: "1.2rem", 
              color: "greenyellow",
              alignItems: "center",
              border: "1px solid orange",
              borderRadius: "25px",
              padding: "4px 12px",
              transition: "all 0.5s"
              }}> 
               <span><RiShoppingBagFill /></span> Add to cart
              </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>;
};

export default BestSeller;
