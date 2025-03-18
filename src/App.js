// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
/* 
import AboutUs from './components/AboutUs/AboutUs';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer'; */
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* 
      <AboutUs />
      <WhyChooseUs />
      <Pricing />
      <Footer /> */}
    </div>
  );
}

export default App;