import React, { useState } from 'react';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';

const HomePage = () => {
  const [searchFilters, setSearchFilters] = useState({});

  const handleSearch = (filters) => {
    console.log('HomePage received filters:', filters);
    setSearchFilters(filters);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <PropertyList searchFilters={searchFilters} />
    </>
  );
};

export default HomePage;