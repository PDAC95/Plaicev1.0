import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces.</p>
        <button className="cta-button">Start Searching</button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;