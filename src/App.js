// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import TextMarquee from './components/TextMarquee/TextMarquee';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import StatsSection from './components/StatsSection/StatsSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
      <AboutUs />
      <WhyChooseUs />
      <StatsSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;