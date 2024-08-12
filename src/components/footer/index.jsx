import React from "react";
import "./Footer.css";
import { FaCopyright, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import payment from "../../img/payment.png"

const Footer = () => {
  return <div className="footerCont">
    <div className="footer">
      <div className="top">
        <div className="title">
          <p>Fruitables</p>
          <span>Fresh products</span>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe Now</button>
        </div>
        <div className="links">
          <FaTwitter className="icon" />
          <RiFacebookFill className="icon" />
          <FaYoutube className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
      <div className="bottom">
        <div className="sect">
          <h1>Why People Like us!</h1>
          <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
          <button>Read More</button>
        </div>
        <div className="sect">
          <h1>Shop Info</h1>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Return Policy</li>
            <li>FAQs & Help</li>
          </ul>
        </div>
        <div className="sect">
          <h1>Account</h1>
          <ul>
            <li>My Account</li>
            <li>Shop details</li>
            <li>Shoping Cart</li>
            <li>Wishlist</li>
            <li>Order History</li>
            <li>International Orders</li>
          </ul>
        </div>
        <div className="sect">
          <h1>Contact</h1>
            <span>Address: 1429 Netus Rd, NY 48247</span>
            <span>Email: Example@gmail.com</span>
            <span>Phone: +0123 4567 8910</span>
            <span>Payment Accepted</span>
          <img src={payment} alt="payment" />
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="left">
        <p><FaCopyright /> <span>Your Site Name</span>,All right reserved</p>
      </div>
      <div className="right">
        <p>Designed By <span>HTML Codex</span>Distributed By <span>ThemeWagon</span></p>
      </div>
    </div>
  </div>;
};

export default Footer;
