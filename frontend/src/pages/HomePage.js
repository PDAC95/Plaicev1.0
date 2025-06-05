import React, { useState } from 'react';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <PropertyList searchTerm={searchTerm} />
    </>
  );
};

export default HomePage;