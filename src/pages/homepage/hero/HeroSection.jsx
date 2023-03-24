import React from "react";
import './heroSection.css';

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <div className="hero-info-container">
          <div className="hero-info-heading">
            Little Lemon
          </div>
          <div className="hero-info-subHeading">
            Chicago
          </div>
          <div className="hero-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum architecto illo doloremque, corporis provident eaque aperiam ab! Neque quisquam molestiae molestias vel!
            Eius ab earum necessitatibus, iusto recusandae quisquam hic provident doloremque fuga fugiat
            error sunt, ad neque dignissimos nam.
          </div>
        </div>
        <div className="hero-btn">
          Reserve a Table
        </div>
        <div className="hero-image-container"></div>
      </div>
    </section>
  );
};

export default HeroSection;
