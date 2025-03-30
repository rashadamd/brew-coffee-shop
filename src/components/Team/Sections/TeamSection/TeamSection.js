import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'; // Import social icons
import { Link } from 'react-router-dom';
import './TeamSection.css';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const TeamSection = () => {
  const teamMembers = [
    {
      image: '/images/team-1.jpg', 
      name: 'Rashad Ahamed',
      title: 'Developer & Designer',
      social: { twitter: 'https://x.com/Rashadamd', facebook: 'facebook.com/i.am.Rashad.Ahamed', instagram: 'https://www.instagram.com/rashad_.amd',linkedin: 'https://www.linkedin.com/in/rashadamd/' } // Replace with your social links,
    }
    
  ];

  const teamSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && teamSectionRef.current) {
            teamSectionRef.current.classList.add('is-visible');
          } else if (!entry.isIntersecting && teamSectionRef.current) {
            teamSectionRef.current.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }

    return () => {
      if (teamSectionRef.current) {
        observer.unobserve(teamSectionRef.current);
      }
      observer.disconnect();
    };
  }, []);


  return (
    <section className="our-team section-padding" ref={teamSectionRef}>
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">our team</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                <div className="split-line">
                  <div>Meet our Experts</div>
                </div>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-item wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="team-image">
                  <Link to="/team-single" data-cursor-text="View"> 
                    <figure className="image-anime">
                      <img src={member.image} alt={member.name} />
                    </figure>
                  </Link>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href={member.social.twitter} aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                      <li><a href={member.social.facebook} aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                      <li><a href={member.social.instagram} aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                      <li><a href={member.social.linkedin} aria-label="Pinterest"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    </ul>
                  </div>
                </div>

                <div className="team-body">
                  <div className="team-content">
                    <h3><Link to="/team-single">{member.name}</Link></h3>
                    <p>{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;