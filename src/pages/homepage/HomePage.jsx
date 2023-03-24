import React from 'react';
import HeroSection from './hero/HeroSection';
import MenuSection from './menu/MenuSection';
import AboutSection from './about/AboutSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
