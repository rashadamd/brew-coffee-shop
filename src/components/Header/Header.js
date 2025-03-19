// src/components/Header/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faDribbble } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="https://html.awaikenthemes.com/roast/images/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/service-single">Service Details</a></li>
                    <li><a className="dropdown-item" href="/blog">Blog</a></li>
                    <li><a className="dropdown-item" href="/blog-single">Blog Details</a></li>
                    <li><a className="dropdown-item" href="/projects">Projects</a></li>
                    <li><a className="dropdown-item" href="/project-single">Project Details</a></li>
                    <li><a className="dropdown-item" href="/team">Team</a></li>
                    <li><a className="dropdown-item" href="/team-single">Team Details</a></li>
                    <li><a className="dropdown-item" href="/image-gallery">Image Gallery</a></li>
                    <li><a className="dropdown-item" href="/video-gallery">Video Gallery</a></li>
                    <li><a className="dropdown-item" href="/faqs">FAQs</a></li>
                    <li><a className="dropdown-item" href="/404">404</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                
              </ul>
              <ul
                class="nav justify-content-center  "
              >
                <li className="nav-item highlighted-menu"><a className="nav-link" href="/book-table">Book A Table</a></li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;