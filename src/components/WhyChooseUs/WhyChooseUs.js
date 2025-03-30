import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '/images/icon-why-choose-1.svg',
      title: 'Fully Responsive',
      description: 'Effortlessly adaptable across all devices, ensuring seamless experiences anytime, anywhere.',
    },
    {
      icon: '/images/icon-why-choose-2.svg',
      title: 'Fresh Ingredients',
      description: 'Crafted with farm-fresh ingredients for flavors that truly stand out in every bite.',
    },
    {
      icon: '/images/icon-why-choose-3.svg',
      title: 'Exclusive Chefs',
      description: 'Discover signature dishes crafted by culinary experts, blending skill and passion.',
    },
    {
      icon: '/images/icon-why-choose-4.svg',
      title: 'Fast Services',
      description: 'Prompt and reliable service that brings convenience without compromising excellence.',
    },
    {
      icon: '/images/icon-why-choose-5.svg',
      title: 'Friendly Atmosphere',
      description: 'Relax in a cozy, inviting space designed to make every visit truly enjoyable.',
    },
    {
      icon: '/images/icon-why-choose-6.svg',
      title: 'Free WIFI',
      description: 'Stay online effortlessly with our fast and secure complimentary WIFI access.',
    }    
  ];

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [reasonsRef, reasonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="why-choose-us is-visible" >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className={`why-choose-content ${contentInView ? 'is-visible' : ''}`}
              ref={contentRef}
            >
              <h3 className="section-subtitle">Why Choose Us</h3>
              <h2 className="section-title">Where taste, warmth, and exceptional care unite</h2>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-list" ref={reasonsRef}>
              {reasons.map((reason, index) => (
                <div
                  className={`why-choose-item ${reasonsInView ? 'fade-in' : ''}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.2}s` }}
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