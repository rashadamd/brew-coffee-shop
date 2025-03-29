import React from 'react';
import TextMarquee from '../TextMarquee/TextMarquee'; 
import AboutUs from '../AboutUs/AboutUs'; 
import AboutHeroSection from './Sections/AboutHeroSection/AboutHeroSection'; 
import OurApproachSection from './Sections/OurApproachSection/OurApproachSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">

      <AboutHeroSection /> 
      <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
      <AboutUs/>
      <OurApproachSection />
      <WhyChooseUs/>
    </div>
  );
};

export default AboutPage;