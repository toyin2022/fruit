import React from "react";
import "./Testimonials.css";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="testicont">
        <h1 className="ourtes">Our Testimonial</h1>
        <p className="ourclient">Our Client Saying!</p>
        <div className="testicards">
          <Swiper
            modules={[Autoplay, Navigation, Autoplay, Pagination, Scrollbar]} // Register modules
            // spaceBetween={50}
            slidesPerView={1}
            spaceBetween={50}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Configure Autoplay
          >
            <SwiperSlide className="testicards">
              <div className="testca">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe labore blanditiis dolores culpa deserunt vel quos odio
                  corrupti beatae placeat?
                </p>
                <div className="linee"></div>
                <div className="testiCabottom">
                  <div className="testiImg"></div>
                  <div className="cred">
                    <p>Client Name</p>
                    <p>Profession</p>
                    <div className="stars">
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                    </div>
                  </div>
                  <div className="qoute">
                    <FaQuoteRight color="orange" size={40} />
                  </div>
                </div>
              </div>
              <div className="testca">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe labore blanditiis dolores culpa deserunt vel quos odio
                  corrupti beatae placeat?
                </p>
                <div className="linee"></div>
                <div className="testiCabottom">
                  <div className="testiImg"></div>
                  <div className="cred">
                    <p>Client Name</p>
                    <p>Profession</p>
                    <div className="stars">
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                    </div>
                  </div>
                  <div className="qoute">
                    <FaQuoteRight color="orange" size={40} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testicards">
              <div className="testca">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe labore blanditiis dolores culpa deserunt vel quos odio
                  corrupti beatae placeat?
                </p>
                <div className="linee"></div>
                <div className="testiCabottom">
                  <div className="testiImg"></div>
                  <div className="cred">
                    <p>Client Name</p>
                    <p>Profession</p>
                    <div className="stars">
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                    </div>
                  </div>
                  <div className="qoute">
                    <FaQuoteRight color="orange" size={40} />
                  </div>
                </div>
              </div>
              <div className="testca">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe labore blanditiis dolores culpa deserunt vel quos odio
                  corrupti beatae placeat?
                </p>
                <div className="linee"></div>
                <div className="testiCabottom">
                  <div className="testiImg"></div>
                  <div className="cred">
                    <p>Client Name</p>
                    <p>Profession</p>
                    <div className="stars">
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                      <FaStar color="green" />
                    </div>
                  </div>
                  <div className="qoute">
                    <FaQuoteRight color="orange" size={40} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
