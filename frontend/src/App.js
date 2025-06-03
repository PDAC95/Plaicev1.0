import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header />
      <Hero onSearch={handleSearch} />
      <PropertyList searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;