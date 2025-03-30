import React from 'react';
import TextMarquee from '../TextMarquee/TextMarquee'; 
import ServicesHeroSection from './Sections/ServicesHeroSection/ServicesHeroSection';
import ServiceList from './Sections/ServiceListSection/ServiceListSection';
import EventSection from './Sections/EventSection/EventSection';
import './ServicesPage.css'; 

const ServicesPage = () => {
  return (
    <div className="services-page">

      <ServicesHeroSection />
      <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
      <ServiceList />
      <EventSection />

    </div>
  );
};

export default ServicesPage;