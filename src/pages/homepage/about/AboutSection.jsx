import React from "react";
import './aboutSection.css';

const AboutSection = () => {
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
        </div>
        <div className="about-image-container">

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
