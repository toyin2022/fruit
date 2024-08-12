import React from "react";
import "./FreshOrganic.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FreshOrganic = () => {
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
      price: "$4.59 / kg",
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
  return (
    <div className="freshOrga">
      <div className="frshOrgCont">
        <h1 className="freveg">Fresh Organic Vegetables</h1>
        <div className="orgaCards">
          <Swiper
            modules={[Navigation, EffectFlip, Pagination, Scrollbar]}
            // spaceBetween={50}
            slidesPerView={1}
            spaceBetween={50} // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Configure Autoplay
          >
            <SwiperSlide className="orgaCards">
              {orgaCards.slice(0, 4).map((item, index) => (
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
            </SwiperSlide>
            <SwiperSlide className="orgaCards">
              {orgaCards.slice(4, 8).map((item, index) => (
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FreshOrganic;
