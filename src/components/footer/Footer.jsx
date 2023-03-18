import React from "react";
import "./footer.css";
import LogoFooter from "../../assets/img/LogoFooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={LogoFooter} alt="Footer logo" />
        </div>
        <div className="footer-nav">
          <div className="heading"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
