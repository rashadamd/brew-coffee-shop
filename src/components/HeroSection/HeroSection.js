import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import 'swiper/css/pagination'; // Only pagination CSS is needed
import 'swiper/css/autoplay';
import './HeroSection.css';

const HeroSection = () => {
  const heroSlides = [
    {
      image: '/images/hero-bg-1.jpg', // Path to the image in the public folder
      subtitle: 'Crafted with love, served with passion',
      title: 'Step into the aroma of freshly brewed coffee',
      description: 'Discover a place where every cup is a masterpiece, crafted with passion and precision.',
    },
    {
      image: '/images/hero-bg-2.jpg', // Path to the image in the public folder
      subtitle: 'Experience the finest coffee',
      title: 'Indulge in the richness of our blends',
      description: 'From bold flavors to smooth finishes, our coffee is a journey of taste.',
    },
    {
      image: '/images/hero-bg-3.jpg', // Path to the image in the public folder
      subtitle: 'A cozy ambiance awaits you',
      title: 'Relax and enjoy your favorite brew',
      description: 'Our café offers a warm and inviting atmosphere for every coffee lover.',
    },
  ];

  return (
    <div className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination]} // Removed Navigation
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay with 5-second delay
        pagination={{ clickable: true }} // Show pagination dots
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <h3 className="hero-subtitle">{slide.subtitle}</h3>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <a href="/about" className="btn btn-primary">Discover Coffee</a>
                  <a href="/book-table" className="btn btn-secondary">Book a Table</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;