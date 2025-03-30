import React from 'react';
import { Link } from 'react-router-dom';
import './TeamHeroSection.css'; 

const TeamHeroSection = () => {
  return (
    <div
      className="page-header parallaxie is-visible"
      style={{ backgroundImage: `url('/images/about-page-hero-bg.jpg')` }} 
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">
                <div className="split-line">
                  <div>MEET OUR TEAM</div>
                </div>
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Team</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeroSection;


