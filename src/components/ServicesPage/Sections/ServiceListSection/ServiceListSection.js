import React, { useRef, useEffect } from 'react';
import './ServiceListSection.css';

const ServiceListSection = () => {
  const services = [
    {
      icon: '/images/list-1.svg',
      title: 'Personalized Coffee Creations',
      description: 'Tailor your coffee experience with blends made just for your taste buds.',
      linkText: 'Read More',
      linkUrl: '/custom-blends'
    },
    {
      icon: '/images/list-2.svg',
      title: 'Fresh Brew, Every Time',
      description: 'Sign up for regular deliveries of aromatic, freshly roasted coffee.',
      linkText: 'Read More',
      linkUrl: '/coffee-subscription'
    },
    {
      icon: '/images/list-3.svg',
      title: 'Master the Art of Brewing',
      description: 'Gain hands-on skills with comprehensive barista training sessions.',
      linkText: 'Read More',
      linkUrl: '/barista-training'
    },
    {
      icon: '/images/list-4.svg',
      title: 'Bulk Coffee, Uncompromised Quality',
      description: 'Source ethically roasted beans perfect for cafés, businesses, or events.',
      linkText: 'Read More',
      linkUrl: '/wholesale-supply'
    },
    {
      icon: '/images/list-5.svg',
      title: 'Journey Through Coffee Flavors',
      description: 'Experience the stories behind each bean with our tasting sessions.',
      linkText: 'Read More',
      linkUrl: '/coffee-tasting-events'
    },
    {
      icon: '/images/list-6.svg',
      title: 'Your Café’s Success Partner',
      description: 'Strategic consulting to bring your coffee business vision to life.',
      linkText: 'Read More',
      linkUrl: '/cafe-consulting'
    }    
  ];
  const serviceListRef = useRef(null);

  useEffect(() => {
    const currentRef = serviceListRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && currentRef) {
            currentRef.classList.add('is-visible');
          } else if (!entry.isIntersecting && currentRef) {
            currentRef.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="service-list-section section-padding"
      ref={serviceListRef}
    >
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card wow fadeInUp" data-wow-delay={`${0.5 + index * 0.2}s`}>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.linkUrl} className="read-more-link">
                  {service.linkText} <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListSection;