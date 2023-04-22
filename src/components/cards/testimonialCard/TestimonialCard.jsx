import React from 'react';
import './testimonialCard.css';
import star from '../../../assets/img-misc/star.png';


const TestimonialCard = ({ imgSrc, name, review }) => {
  return (
    <div className="t-card-container">
      <div className="t-card-rating">
        <img src={star} class='img-star' alt="rating star" />
        <img src={star} class='img-star' alt="rating star" />
        <img src={star} class='img-star' alt="rating star" />
        <img src={star} class='img-star' alt="rating star" />
        <img src={star} class='img-star' alt="rating star" />
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
