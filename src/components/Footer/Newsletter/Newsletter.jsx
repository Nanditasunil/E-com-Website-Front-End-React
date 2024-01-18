import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="big-text">
          Sign up for the latest update and offers
        </span>
        <div className="form">
          <input type="text" />
          <button className="btn btn-info">Subscribe</button>
        </div>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/rcapparelco/"
            target="blank"
            className="icon"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://www.instagram.com/rcapparelco/"
            target="blank"
            className="icon"
          >
            <FaTwitter size={14} />
          </a>
          <a
            href="https://www.instagram.com/rcapparelco/"
            target="blank"
            className="icon"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="https://www.instagram.com/rcapparelco/"
            target="blank"
            className="icon"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
