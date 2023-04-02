import React from 'react';

const MenuSection = () => {
  return (
    <section id='menu-section'>
      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-heading">This Weeks Specials!</h1>
          <div className="menu-btn">Online Menu</div>
        </div>
        <div className="menu-items"></div>
      </div>
    </section>
  );
};

export default MenuSection;
