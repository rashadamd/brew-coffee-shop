import React from 'react';
import TextMarquee from '../TextMarquee/TextMarquee'; 
import ContactHeroSection from './Sections/ContactHeroSection/ContactHeroSection';
import ContactUs from './Sections/ContactUs/ContactUs';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-page">

      <ContactHeroSection />
      <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
      <ContactUs />
    </div>
  );
};

export default Contact;