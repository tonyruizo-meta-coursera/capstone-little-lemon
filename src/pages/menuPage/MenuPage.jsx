import React from 'react';
import littleLemonMenu from '../../assets/img-menu/littleLemonMenu.jpg';
import './menuPage.css';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();
  const backClick = () => navigate('/');
  const handleClick = () => navigate('/reservations');
  return (
    <div className='menuPage-container'>
      <div className="menuPage-image">
        <img src={littleLemonMenu} alt="full menu" />
      </div>
      <div className="menuPage-btn">
        <PrimaryBtn onClick={backClick}>Go Back</PrimaryBtn>
        <PrimaryBtn onClick={handleClick}>Reserve a Table</PrimaryBtn>
      </div>
    </div>
  );
};

export default MenuPage;
