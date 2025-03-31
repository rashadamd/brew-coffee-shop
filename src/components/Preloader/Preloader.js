// src/components/Preloader/Preloader.js
import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
  if (!isLoading) {
    return null; // If not loading, don't render preloader
  }

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/loader.svg" alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;