import React from 'react';
import './testimonials.css';
import '../../../components/cards/testimonialCard/TestimonialCard';
import TestimonialCard from '../../../components/cards/testimonialCard/TestimonialCard';
import { ReviewRatings } from './ReviewRatings';

const Testimonials = () => {
  return (
    <section id='testimonial-section'>
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonial-display">
          {ReviewRatings.map((reviews) => (
            <TestimonialCard
              key={reviews.id}
              name={reviews.name}
              imgSrc={reviews.image}
              review={reviews.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
