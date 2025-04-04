import React, { useRef, useEffect } from 'react';
import './OurApproachSection.css';

const OurApproachSection = () => {
  const approachItems = [ 
    {
        icon: '/images/icon-our-mission.svg',
        title: 'Our Mission',
        description: 'To create unforgettable coffee moments by sourcing premium beans and crafting each cup with dedication and excellence.',
    },
    {
        icon: '/images/icon-our-vision.svg',
        title: 'Our Vision',
        description: 'To be a cornerstone for coffee enthusiasts everywhere, bringing people together with every flavorful sip.',
    },
    {
        icon: '/images/icon-our-value.svg',
        title: 'Our Value',
        description: 'Built on authenticity, sustainability, and quality, our values drive us to redefine coffee culture.',
    },
  ];
  const ourApproachRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && ourApproachRef.current) {
            ourApproachRef.current.classList.add('is-visible');
          } else {
            ourApproachRef.current.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ourApproachRef.current) {
      observer.observe(ourApproachRef.current);
    }

    return () => {
      if (ourApproachRef.current) {
        observer.unobserve(ourApproachRef.current);
      }
    };
  }, []);

  return (
    <section
      className="our-approach section-padding"
      ref={ourApproachRef}
    >
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
                <img src="/images/our-approach-image.jpg" alt="Coffee Pouring" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;