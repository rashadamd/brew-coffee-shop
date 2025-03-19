// src/components/TextMarquee/TextMarquee.js
import React from 'react';
import './TextMarquee.css';

const TextMarquee = ({ text }) => {
  return (
    <div className="text-marquee-container">
      <div className="text-marquee">
        <p className="text-marquee-content" aria-hidden="true">{text}</p> {/* First copy - aria-hidden for screen readers */}
        <p className="text-marquee-content" >{text}</p>        {/* Second copy - visible copy */}
      </div>
    </div>
  );
};

export default TextMarquee;