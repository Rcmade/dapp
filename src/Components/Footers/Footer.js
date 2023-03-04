import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="mainFooter">
          <div className="logoinfo" data-aos="fade-up">
            <div>
              <Link to="/" className="navBrandLink">
                {/*  Add Your logo image  */}
                <img
                  src="/logo192.png"
                  className=" footerLogoImg sm:h-9"
                  alt="Logo"
                />
                {/* Add Your Brand name  */}
                <span className="footerLogoText">LOgo</span>
              </Link>
            </div>
            <div className="contactDetails">
              <h1>Contact Us</h1>
              <li>
                <div className=""></div>
                <Link to="/" href="tel:+914444048690">
                  +91 5545454545
                </Link>
              </li>
              <li>
                <div className=""></div>
                <Link to="/" href="mailto:yourmail@gmail.com">
                  yourmail@gmail.com
                </Link>
              </li>
            </div>
          </div>
          <div className="com " data-aos="fade-up">
            <h1>About</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="info" data-aos="fade-up">
            <h1>Social Media</h1>
            <div className="sociallogos">
              <div className="logobox">
                <Link to="/">Linked In</Link>
                <Link to="/">FaceBook</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer>© Your Copyright 2021 All Rights Reserved</footer> */}
    </>
  );
};

export default Footer;
