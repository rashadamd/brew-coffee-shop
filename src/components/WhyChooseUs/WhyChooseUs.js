// src/components/WhyChooseUs/WhyChooseUs.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '/images/icon-why-choose-1.svg',
      title: 'Fully Responsive',
      description: 'Designed to reduce allergens, dust, and pollutants, these systems create a healthier environment.',
    },
    {
      icon: '/images/icon-why-choose-2.svg',
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients to ensure the best taste and quality in every dish.',
    },
    {
      icon: '/images/icon-why-choose-3.svg',
      title: 'Exclusive Chefs',
      description: 'Our chefs are experts in their craft, bringing you unique and delicious creations.',
    },
    {
      icon: '/images/icon-why-choose-4.svg',
      title: 'Fast Services',
      description: 'We prioritize efficiency to ensure you get your order quickly without compromising quality.',
    },
    {
      icon: '/images/icon-why-choose-5.svg',
      title: 'Friendly Atmosphere',
      description: 'Our café offers a warm and welcoming environment for all our guests.',
    },
    {
      icon: '/images/icon-why-choose-6.svg',
      title: 'Free WIFI',
      description: 'Stay connected with our complimentary high-speed WIFI.',
    },
  ];

  const [contentRef, contentInView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const [reasonsRef, reasonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className={`why-choose-content ${contentInView ? 'fade-in' : ''}`}
              ref={contentRef}
            >
              <h3 className="section-subtitle">Why Choose Us</h3>
              <h2 className="section-title">Where flavor meets comfort and services</h2>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-list" ref={reasonsRef}>
              {reasons.map((reason, index) => (
                <div
                  className={`why-choose-item ${reasonsInView ? 'fade-in' : ''}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.2}s` }} // Staggered animation
                >
                  <div className="icon-box">
                    <img src={reason.icon} alt={reason.title} />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;