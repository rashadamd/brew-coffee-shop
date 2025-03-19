// src/components/AboutUs/AboutUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="section-subtitle">About Us</h3>
              <h2 className="section-title">Bringing people together, one cup at a time</h2>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/images/icon-food-delivery.svg" alt="Food Delivery" />
                  </div>
                  <div className="feature-content">
                    <h4>Food Delivery</h4>
                    <p>With our fast and reliable food delivery service, your favorite coffee, snacks, and treats are just a click away.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/images/icon-event-hosting.svg" alt="Event Hosting" />
                  </div>
                  <div className="feature-content">
                    <h4>Event Hosting</h4>
                    <p>Host your special moments with us! From intimate gatherings to vibrant celebrations, we offer the perfect setting.</p>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <a href="/about" className="btn btn-primary">More About Us</a>
                <div className="video-play-button">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                  <p>Watch Video</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
              <img src="/images/about-us-image.jpg" alt="About Us" />
              <div className="opening-hours">
                <div className="icon-box">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div className="opening-hours-content">
                  <h3>Open Hours</h3>
                  <ul>
                    <li><span>Monday</span><span>09:30 - 7:30</span></li>
                    <li><span>Tuesday</span><span>09:30 - 7:30</span></li>
                    <li><span>Wednesday</span><span>09:30 - 7:30</span></li>
                    <li><span>Thursday</span><span>09:30 - 7:30</span></li>
                    <li><span>Friday</span><span>09:30 - 7:30</span></li>
                    <li><span>Saturday</span><span>10:30 - 5:00</span></li>
                    <li><span>Sunday</span><span>24 hours open</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;