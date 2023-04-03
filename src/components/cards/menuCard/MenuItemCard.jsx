import React from 'react';
import './menuItemCard.css';

const MenuItemCard = ({ imgSrc, title, price, text }) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt="dish item" />
      <div className="card-content">
        <div className="card-heading">
          <div className="card-title">{title}</div>
          <div className="card-price">{price}</div>
        </div>
        <div className="card-text">{text}</div>
        <div className="card-delivery">
          <p>Order a delivery $4</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
