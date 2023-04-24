import React from 'react';
import PrimaryBtn from '../../../components/buttons/PrimaryBtn';
import MenuItemCard from '../../../components/cards/menuCard/MenuItemCard';
import './menuSection.css';
import bruchetta from '../../../assets/img-menu/bruchetta.svg';
import greekSalad from '../../../assets/img-menu/greekSalad.jpg';
import lemonDessert from '../../../assets/img-menu/lemonDessert.jpg';
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const menuItems = [
    {
      id: '01',
      image: greekSalad,
      title: 'Greek Salad',
      price: '$12.00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sit amet nisl suscipit adipiscing bibendum.Sit amet cursus sit.'
    },
    {
      id: '02',
      image: bruchetta,
      title: 'Bruschetta',
      price: '$5.99',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sit amet nisl suscipit.'
    },
    {
      id: '03',
      image: lemonDessert,
      title: 'Lemon Dessert',
      price: '$5.00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sit amet.'
    },
  ];

  const navigate = useNavigate();
  const handleClick = () => navigate('/menu-page');
  return (
    <section id='menu-section'>
      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-heading">This weeks specials!</h1>
          <div className="menu-btn">
            <PrimaryBtn onClick={handleClick}>Online Menu</PrimaryBtn>
          </div>
        </div>
        <div className="menu-display">
          {menuItems.map((item) => (
            <MenuItemCard
              key={item.id}
              imgSrc={item.image}
              title={item.title}
              price={item.price}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
