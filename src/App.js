import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import TextMarquee from './components/TextMarquee/TextMarquee';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import StatsSection from './components/StatsSection/StatsSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage'; 
import Contact from './components/Contact/Contact'
import Team from './components/Team/Team'; 
import './App.css';

function App() {
  return (
 
    <Router>
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={
            <> 
              <HeroSection />
              <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
              <AboutUs />
              <WhyChooseUs />
              <StatsSection />
              <Pricing />
            </>
          } />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/contact" element={<Contact />}/>
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;