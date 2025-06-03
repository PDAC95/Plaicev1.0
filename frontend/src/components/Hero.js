import React from 'react';
import SearchBar from './SearchBar';
import './Hero.css';

const Hero = ({ onSearch }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces.</p>
        <button className="cta-button">Start Searching</button>
      </div>
      <div className="hero-overlay"></div>
      <SearchBar onSearch={onSearch} />
    </section>
  );
};

export default Hero;