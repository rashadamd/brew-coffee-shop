import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faDribbble } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        navRef.current && !navRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscPress(event) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscPress);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPress);
    };
  }, []);

  return (
    <header className="main-header" ref={navRef}>
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                {/* <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li> */}

                {/* Pages Dropdown */}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  ref={dropdownRef}
                >
                  <a className="nav-link dropdown-toggle" href="#">
                    Pages
                  </a>
                  <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    {/* <li><a className="dropdown-item" href="/service-single">Service Details</a></li>
                    <li><a className="dropdown-item" href="/blog">Blog</a></li>
                    <li><a className="dropdown-item" href="/projects">Projects</a></li> */}
                    <li><a className="dropdown-item" href="/team">Team</a></li>
                    {/* <li><a className="dropdown-item" href="/blog-single">Blog Details</a></li> */}
                    {/* <li><a className="dropdown-item" href="/project-single">Project Details</a></li> */}
                    {/* <li><a className="dropdown-item" href="/team-single">Team Details</a></li>
                    <li><a className="dropdown-item" href="/image-gallery">Image Gallery</a></li>
                    <li><a className="dropdown-item" href="/video-gallery">Video Gallery</a></li>
                    <li><a className="dropdown-item" href="/faqs">FAQs</a></li>
                    <li><a className="dropdown-item" href="/404">404</a></li> */}
                  </ul>
                </li>

                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
              </ul>

              <ul className="nav justify-content-center">
                <li className="nav-item highlighted-menu">
                  <a className="nav-link" href="/book-table">Book A Table</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
