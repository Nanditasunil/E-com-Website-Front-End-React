import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text-foot">
            "Elevate Your Style: Unleash Your Creativity with Customizable
            Jackets, Varsitys, T-Shirts, Hoodies, and More. Your Wardrobe, Your
            Rules!"
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text-foot">
              Bela Casa , Sus gaon , Sus chowk , pashan road pune maharastra ,
              411021
            </div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text-foot">Phone : 0834 4463 7484</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text-foot">email: rcapparels@gmail.com </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text-foot">Hoodies </div>
          <div className="text-foot">Varsity Jackets </div>
          <div className="text-foot">Tshirts </div>
          <div className="text-foot">Funky Socks</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text-foot">Home </div>
          <div className="text-foot">About </div>
          <div className="text-foot">Privacy Policy </div>
          <div className="text-foot">Returns</div>
          <div className="text-foot">Terms & Conditions</div>
          <div className="text-foot">Contact Us </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text-foot">
            SHOP 2023 BY KUNAL NANDITA PRANIDHI MAIMUNA{" "}
          </div>
          <img src={Payment} alt="images" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
