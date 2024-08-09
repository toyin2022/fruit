import React, { useState } from "react";
import "./Organic.css";
import { RiShoppingBagFill } from "react-icons/ri";

const Organic = () => {
  const [filter, setFilter] = useState([]);
  const orgaCards = [
    {
      category: "Fruits",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Fruits",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Fruits",
      title: "Raspberries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Vegetable",
      title: "Apricots",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Fruits",
      title: "Banana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Fruits",
      title: "Oranges",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Meats",
      title: "Raspberries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      category: "Bread",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99 / kg",
    },
  ];

  const handleClick = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "All") {
      setFilter(orgaCards); // Show all products
    } else {
      const filteredCards = orgaCards.filter(
        (item) => item.category === selectedCategory
      );
      setFilter(filteredCards);
    }
  };

  useState(() => {
    setFilter(orgaCards);
  }, []);

  return (
    <div className="organicSection">
      <div className="organicCont">
        <div className="organicTop">
          <h2 className="orti">Our Organic Products</h2>
          <div className="changeBtns">
            <button
              className="btnorga organicBtn"
              onClick={handleClick}
              value="All"
            >
              All Products
            </button>
            <button
              className="organicBtn"
              onClick={handleClick}
              value="Vegetable"
            >
              Vegetables
            </button>
            <button className="organicBtn" onClick={handleClick} value="Fruits">
              Fruits
            </button>
            <button className="organicBtn" onClick={handleClick} value="Bread">
              Bread
            </button>
            <button className="organicBtn" onClick={handleClick} value="Meats">
              Meats
            </button>
          </div>
        </div>
        <div className="organicBottom">
          {filter.map((item, index) => (
            <div className="orgaCard" key={index}>
              <div className="orgaCat">
                <p>{item.category}</p>
              </div>
              <p className="orgatit">{item.title}</p>
              <p className="orgadesc">{item.description}</p>
              <p className="orgapri">{item.price}</p>
              <button className="addtocart">
                <RiShoppingBagFill color="rgb(171, 238, 37)" />
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organic;
