import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Place</h3>
            <p className="footer-description">
              Your trusted partner in finding the perfect property in Kitchener-Waterloo region. 
              We make real estate simple and accessible for everyone.
            </p>
            <div className="contact-info">
              <p>📧 info@place.ca</p>
              <p>📞 (519) 555-0123</p>
              <p>📍 Kitchener, ON, Canada</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Property Types</h4>
            <ul className="footer-links">
              <li><a href="/houses">Houses</a></li>
              <li><a href="/condos">Condos</a></li>
              <li><a href="/townhouses">Townhouses</a></li>
              <li><a href="/apartments">Apartments</a></li>
              <li><a href="/commercial">Commercial</a></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Place. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;