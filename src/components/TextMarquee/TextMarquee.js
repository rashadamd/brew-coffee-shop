import React from 'react';
import './TextMarquee.css';

const TextMarquee = ({ text }) => {
  return (
    <div className="text-marquee-container">
      <div className="text-marquee">
        {/* first copy */}
        <p className="text-marquee-content" aria-hidden="true">{text}</p>
        {/* second copy */}
        <p className="text-marquee-content" >{text}</p>       
      </div>
    </div>
  );
};

export default TextMarquee;