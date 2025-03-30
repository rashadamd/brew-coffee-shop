import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './EventSection.css';

const EventSection = () => {
  const eventSectionRef = useRef(null);

  useEffect(() => {
    const section = eventSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
          } else {
            section.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      className="event-section section-padding"
      ref={eventSectionRef}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="event-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">
                  What We Offer ?
                </h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  <div className="split-line">
                    <div>UNFORGETTABLE EVENTS</div>
                  </div>
                  <div className="split-line">
                    <div>WITH ELEGANCE</div>
                  </div>
                  <div className="split-line">
                    <div>AND STYLE</div>
                  </div>
                </h2>

              </div>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Our cozy and elegant venue is designed to host your special moments with style and comfort. 
                Be it a birthday celebration, an intimate gathering, or a private business meeting, we've got you covered.
              </p>


              <div className="event-collapsibles">
                <details className="wow fadeInUp" data-wow-delay="0.4s">
                  <summary>
                    <FontAwesomeIcon icon={faMinus} className="minus-icon" />
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    Organize A Wedding
                  </summary>
                  <div className="details-content">
                    <p>A perfect day filled with love, laughter, and happily-ever-afters.</p>
                  </div>
                </details>

                <details className="wow fadeInUp" data-wow-delay="0.4s">
                  <summary>
                    <FontAwesomeIcon icon={faMinus} className="minus-icon" />
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    Private Dining Room
                  </summary>
                  <div className="details-content">
                    <p>Exclusive moments, exquisite tastes, and unparalleled privacy.</p>
                  </div>
                </details>

                <details className="wow fadeInUp" data-wow-delay="0.5s">
                  <summary>
                    <FontAwesomeIcon icon={faMinus} className="minus-icon" />
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    Birthday Party
                  </summary>
                  <div className="details-content">
                    <p>Celebrate the magic of your day—where memories are made and joy never fades.</p>
                  </div>
                </details>
              </div>

              <div className="event-action wow fadeInUp" data-wow-delay="0.6s">
                <button className="btn-default btn-highlighted">Schedule Your Event</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-image">
              <figure className="image-anime">
                <img src="/images/about-event-image.jpg" alt="Private Events" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;