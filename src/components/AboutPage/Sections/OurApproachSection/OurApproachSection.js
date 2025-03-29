

// src/components/AboutPageSections/OurApproachSection.js
import React, { useRef, useEffect } from 'react';
import './OurApproachSection.css';

const OurApproachSection = () => {
  const approachItems = [ 
    {
        icon: '/images/icon-our-mission.svg', // Replace with your mission icon path
        title: 'Our Mission',
        description: 'Our mission is to deliver exceptional coffee crafted with the finest beans care, providing a rich experience that celebrates quality.',
      },
      {
        icon: '/images/icon-our-vision.svg', // Replace with your vision icon path
        title: 'Our Vision',
        description: 'Our vision is to inspire a love for coffee by crafting rich, high-quality experiences that bring people together.',
      },
      {
        icon: '/images/icon-our-value.svg', // Replace with your value icon path
        title: 'Our Value',
        description: 'Our values are built on passion, quality, and sustainability, focusing on ethical sourcing and excellence in every cup.',
      },
   ];
  const ourApproachRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && ourApproachRef.current) { // ADDED CHECK for ourApproachRef.current
            ourApproachRef.current.classList.add('is-visible');
          } else {
            ourApproachRef.current.classList.remove('is-visible'); // **NEW: REMOVE CLASS when NOT in view**
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ourApproachRef.current) { // ADDED CHECK before observing
      observer.observe(ourApproachRef.current);
    }

    return () => {
      if (ourApproachRef.current) { // ADDED CHECK before unobserving
        observer.unobserve(ourApproachRef.current);
      }
    };
  }, []);

  return (
    <section
      className="our-approach section-padding"
      ref={ourApproachRef} // Ref attached here
    >
      {/* ... rest of your component JSX ... */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-approach-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">our approach</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  <div className="split-line">
                    <div>Crafting the perfect coffee experience</div>
                  </div>
                </h2>
              </div>
              <div className="mission-vision-list">
                {approachItems.map((item, index) => (
                  <div className="mission-vision-item wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`} key={index}>
                    <div className="icon-box">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="mission-vision-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="our-approach-image">
              <figure className="image-anime">
                <img src="/images/our-approach-image.jpg" alt="Coffee Pouring" /> {/* Replace with your image path */}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;