import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './ContactUs.css';

const ContactUs = () => {
  const contactUsRef = useRef(null);
  
    useEffect(() => {
      const section = contactUsRef.current; // Get the current ref value ONCE
  
      if (!section) {
        // If ref is null, exit early - element not yet rendered
        return;
      }
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              section.classList.add('is-visible'); // Use captured 'section' ref
            } else {
              section.classList.remove('is-visible'); // Use captured 'section' ref
            }
          });
        },
        { threshold: 0.3 }
      );
  
      observer.observe(section); // Observe the element (using captured ref)
  
      return () => {
        observer.disconnect(); // Disconnect observer in cleanup
  
        if (section) { // Check again before unobserve in cleanup
          observer.unobserve(section);
        }
      };
    }, []);

  return (
    <section className="contact-us-section section-padding" ref={contactUsRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
              <div className="section-title">
                <h3 className="wow fadeInUp">
                   Contact Us
                </h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  <div className="split-line">
                    <div>CONNECT WITH US</div>
                  </div>
                  <div className="split-line">
                    <div>TODAY</div>
                  </div>
                </h2>

              </div>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                We're here to help and connect! Whether you have inquiries, 
                need assistance, or wish to collaborate, don't hesitate to reach out to us.
              </p>

              <div className="contact-details">
                <div className="contact-detail-box wow fadeInUp" data-wow-delay="0.3s">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="detail-content">
                    <h4>Phone Number</h4>
                    <p>+94 78 000 0000</p>
                  </div>
                </div>

                <div className="contact-detail-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="detail-content">
                    <h4>Email Address</h4>
                    <p>brew@coffee.com</p>
                  </div>
                </div>

                <div className="contact-detail-box wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="detail-content">
                    <h4>Address</h4>
                    <p>No: 999, Brew Street Coffee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-wrapper">
              <div className="section-title">
                <h3 className="wow fadeInUp">Send A Message</h3>
              </div>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name *" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="E-mail Address *" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number *" required/>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                </div>
                <div className="form-action wow fadeInUp" data-wow-delay="0.6s">
                  <button type="submit" className="btn-default btn-highlighted">Submit Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;