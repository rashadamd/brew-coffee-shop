// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import TextMarquee from './components/TextMarquee/TextMarquee';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import StatsSection from './components/StatsSection/StatsSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import Preloader from './components/Preloader/Preloader'; // Import Preloader

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false); // State for preloader
  const location = useLocation(); // Get current location

  useEffect(() => {
    setIsLoading(true); // Set loading to true on route change
    const timer = setTimeout(() => {
      setIsLoading(false); // After a delay, set loading to false (hide preloader)
    }, 1500); // Adjust delay (milliseconds) as needed - e.g., 1500ms = 1.5 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [location.pathname]); // Trigger effect on route pathname change


  return (
    <Router>
      <Preloader isLoading={isLoading} /> {/* Wrap Routes with Preloader */}
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;