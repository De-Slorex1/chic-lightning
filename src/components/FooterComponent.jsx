import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.css";
import { HashLink } from 'react-router-hash-link';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function FooterComponent() {
  return (
   <div>
     <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">Chic Lighting & Design</h2>

          <p className="footer-text">
            Creating sophisticated lighting solutions that transform every
            atmosphere with timeless expertise and craftsmanship since 1994.
          </p>
        </div>

        <div className="footer-column">
          <h4>SITEMAP</h4>

          <div className="footer-links">
            <Link to="/catalog">Catalog Overview</Link>
            <HashLink smooth to="/about#faq">FAQs</HashLink>  
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>

          <div className="contact-info">
            <p>Studio: 124 Design Way, Suite 400</p>
            <p>Architectural Line: (555) 012-3456</p>
            <p>Email: design@chiclighting.com</p>
          </div>

          <p className="copyright">
            © 2024 Chic Lighting & Design. All rights reserved.
          </p>
        </div>

      </div>

      
    </footer>
    <div
      className="footer-ticker"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="ticker-track">
        <div className="ticker-item">
          <FaClock />
          <span>12:02:55 PM</span>
        </div>

        <div className="ticker-item">
          <FaCalendarAlt />
          <span>June 1, 2026</span>
        </div>

        <div className="ticker-item">
          <FaMapMarkerAlt />
          <span>Your Location: London Gallery</span>
        </div>

        <div className="ticker-item highlight">
          NEW COLLECTION ARRIVING IN 3 DAYS
        </div>

        {/* Duplicate for seamless scrolling */}
        <div className="ticker-item">
          <FaClock />
          <span>12:02:55 PM</span>
        </div>

        <div className="ticker-item">
          <FaCalendarAlt />
          <span>June 1, 2026</span>
        </div>

        <div className="ticker-item">
          <FaMapMarkerAlt />
          <span>Your Location: London Gallery</span>
        </div>

        <div className="ticker-item highlight">
          NEW COLLECTION ARRIVING IN 3 DAYS
        </div>
      </div>
    </div>
   </div>
  );
}

export default FooterComponent;