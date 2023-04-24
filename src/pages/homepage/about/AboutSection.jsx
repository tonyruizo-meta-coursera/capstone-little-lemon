import React from "react";
import './aboutSection.css';
import about1 from '../../../assets/img-misc/about1.jpg';
import about2 from '../../../assets/img-misc/about2.jpg';
import PrimaryBtn from "../../../components/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/about-page');
  return (
    <section id="about-section">
      <div className="about-container">
        <div className="about-info-container">
          <h1 className="about-info-heading">
            Little Lemon
          </h1>
          <h3 className="about-info-subHeading">
            Chicago
          </h3>
          <div className="about-info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ullam cumque doloribus in provident eligendi iste, quam quibusdam accusantium tempora
            itaque velit quia dolorem beatae quaerat, facilis sed quas delectus voluptas!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa libero facilis,
            nobis voluptas ab laboriosam beatae atque nostrum consequuntur nisi hic expedita enim.
            Dolores exercitationem vel voluptates? Ipsam, incidunt?
          </div>
          <div className="about-more-btn">
            <PrimaryBtn onClick={handleClick}>Read more</PrimaryBtn>
          </div>
        </div>
        <div className="about-image-container">
          <img src={about1} className='about1' alt="chef in the kitchen" />
          <img src={about2} className='about2' alt="chef in the kitchen 2" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
