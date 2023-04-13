import React from 'react';
import HeroSection from './hero/HeroSection';
import MenuSection from './menu/MenuSection';
import AboutSection from './about/AboutSection';
import Testimonials from './testimonials/Testimonials';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <Testimonials />
      <AboutSection />
    </div>
  );
};

export default HomePage;
