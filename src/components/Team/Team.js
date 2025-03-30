import React from 'react';
import TextMarquee from '../TextMarquee/TextMarquee'; 
import TeamHeroSection from './Sections/TeamHeroSection/TeamHeroSection';
import TeamSection from './Sections/TeamSection/TeamSection'; 
import './Team.css'; 

const Team = () => {
  return (
    <div className="team-page">
        <TeamHeroSection />
      <TextMarquee text="Coffee's Calling Your Name | But First, Coffee. Always | Life Happens, Coffee Helps | Get Your Brew On! | Warning: May Cause Happiness" />
        <TeamSection />
    </div>
  );
};

export default Team; 