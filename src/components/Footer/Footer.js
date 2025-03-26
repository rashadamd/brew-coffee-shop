import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'; 
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footerRef.current.classList.add('is-visible');
          } else {
            footerRef.current.classList.remove('is-visible'); 
          }
        });
      },
      {
        threshold: 0.1 
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>  
      <div className="container">
        <div className="footer-content">

          <section className="contact-info-section">
            <div className="contact-info-box">
              <FontAwesomeIcon icon={faPhone} />
              <h4>Contact Us</h4>
              <p>T. +123 456 789</p>
              <a href="mailto:info@domainname.com">M. info@domainname.com</a>
              <a href="/contact" className="btn-contact-info">Contact Us</a>
            </div>

            <div className="contact-info-box">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h4>Address</h4>
              <p>29721 Westheimer Road, Santa Ana,</p>
              <p>Illinois 85486</p>
              <a href="#" className="btn-contact-info">Get Direction</a>
            </div>

            <div className="contact-info-box">
              <FontAwesomeIcon icon={faClock} />
              <h4>Opening Hours</h4>
              <p>Everyday: From 12.30 To 23.00</p>
              <p>Kitchen Closes At 22.00</p>
              <a href="/reserve" className="btn-contact-info">Reserve A Table</a>
            </div>
          </section>


          <div className="footer-logo">
            <img src="/images/logo.svg" alt="Brew Coffee" />
            <p>Bringing people together through the love of coffee.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i>No: 999, Brew Street Coffee</li>
                <li><i className="fas fa-phone"></i> +94 78 000 0000</li>
                <li><i className="fas fa-envelope"></i>brew@coffee.com</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Hours</h3>
              <ul>
                <li>Monday - Friday: 7am - 9pm</li>
                <li>Saturday: 8am - 10pm</li>
                <li>Sunday: 8am - 8pm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Brew Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;