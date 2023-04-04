import React from "react";
import './heroSection.css';
import restaurant from '../../../assets/img-misc/restauranfood.jpg';
import PrimaryBtn from "../../../components/buttons/PrimaryBtn";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <div className="hero-info-container">
          <h1 className="hero-info-heading">
            Little Lemon
          </h1>
          <h3 className="hero-info-subHeading">
            Chicago
          </h3>
          <div className="hero-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum architecto illo doloremque, corporis provident eaque aperiam ab! Neque molestias vel!
            Eius ab earum necessitatibus, iusto recusandae quisquam hic provident doloremque fuga fugiat
            error.
          </div>
          <div className="hero-btn">
            <PrimaryBtn>Reserve a Table</PrimaryBtn>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-img-item">
            <img src={restaurant} alt="special menu dish" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
