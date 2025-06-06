import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';
import './Favorites.css';

const Favorites = () => {
  const { favorites, clearAllFavorites, favoritesCount } = useFavorites();

  if (favoritesCount === 0) {
    return (
      <div className="favorites-container">
        <div className="favorites-empty">
          <div className="empty-icon">💔</div>
          <h2>No Favorites Yet</h2>
          <p>Start exploring properties and save your favorites by clicking the heart icon!</p>
          <Link to="/" className="browse-button">
            Browse Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h1>My Favorites</h1>
        <p>You have {favoritesCount} saved {favoritesCount === 1 ? 'property' : 'properties'}</p>
        <button 
          className="clear-favorites-btn"
          onClick={clearAllFavorites}
        >
          Clear All Favorites
        </button>
      </div>

      <div className="favorites-grid">
        {favorites.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;