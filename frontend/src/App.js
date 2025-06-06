import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyDetail from './pages/PropertyDetail';
import Favorites from './pages/Favorites';
import './App.css';


function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;