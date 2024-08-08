import React from "react";
import "./hero.css";
import heroImg from "../../img/hero-img-1.png";
import heroImg2 from "../../img/hero-img-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules"; // Correct import for modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="herocont">
        <div className="heroText">
          <p className="heroText1">100% Organic Foods</p>
          <p className="heroText2">Organic Veggies & Fruits Foods</p>
          <div className="searchBox">
            <input type="text" className="searchInput" placeholder="Search" />
            <button className="searchbtn">Submit Now</button>
          </div>
        </div>
        <div className="hero-right">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar]} // Register modules
            // spaceBetween={50}
            slidesPerView={1}
            spaceBetween={50}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Configure Autoplay
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="fruitslide">
                <p className="fruitslideText">Fruits</p>
              </div>
              <img src={heroImg} alt="hero img" className="heroimg" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="fruitslide">
                <p className="fruitslideText">Vesitable</p>
              </div>
              <img src={heroImg2} alt="hero img" className="heroimg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
