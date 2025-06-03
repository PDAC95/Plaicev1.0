import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PropertyList />
    </div>
  );
}

export default App;