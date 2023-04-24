import React from 'react';
import restaurant from '../../assets/img-misc/restaurant.jpg';
import './aboutPage.css';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  return (
    <div className='aboutPage-container'>
      <div className="aboutPage-header">
        <h1>About Us</h1>
      </div>
      <div className="aboutPage-display">
        <div className="aboutPage-text">
          <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.</p>

          <p>The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>

          <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
            Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.
          </p>
        </div>
        <div className="aboutPage-imageContainer">
          <div className="aboutPage-image">
            <img src={restaurant} alt="resaurant view" />
          </div>
        </div>
      </div>
      <div className="aboutPage-btn">
        <PrimaryBtn onClick={handleClick}>Go Back</PrimaryBtn>
      </div>
    </div >
  );
};

export default AboutPage;
