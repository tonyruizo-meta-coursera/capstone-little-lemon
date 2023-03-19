import React from "react";
import "./footer.css";
import LogoFooter from "../../assets/img/LogoFooter.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={LogoFooter} alt="Footer logo" />
        </div>
        <div className="footer-nav">
          <div className="heading">Doormat Navigation</div>
          <div className="footer-nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/#order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <div className="heading">
            <div className="footer-contact-links">
              <ul>
                <li>123 W Main St. Miami, FL</li>
                <li>855-222-1111</li>
                <li>little.lemon@restaurant.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <div className="heading">
            <div className="footer-social-links">
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
