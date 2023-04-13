import React from 'react';
import './testimonialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ imgSrc, name, review }) => {
  return (
    <div className="t-card-container">
      <div className="t-card-rating">
        <FontAwesomeIcon icon={faStar} size='1x' className='t-card-star' />
        <FontAwesomeIcon icon={faStar} size='1x' className='t-card-star' />
        <FontAwesomeIcon icon={faStar} size='1x' className='t-card-star' />
        <FontAwesomeIcon icon={faStar} size='1x' className='t-card-star' />
        <FontAwesomeIcon icon={faStar} size='1x' className='t-card-star' />
      </div>
      <div className="t-card-person">
        <div className="t-card-avatar">
          {imgSrc}
        </div>
        <div className="t-card-name">{name}</div>
      </div>
      <div className="t-card-review">{review}</div>
    </div>
  );
};

export default TestimonialCard;
