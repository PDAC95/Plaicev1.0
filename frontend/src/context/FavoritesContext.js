import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

 // Load favorites from localStorage on component mount
useEffect(() => {
  try {
    const savedFavorites = localStorage.getItem('place-favorites');
    if (savedFavorites && savedFavorites !== 'undefined' && savedFavorites !== 'null') {
      const parsedFavorites = JSON.parse(savedFavorites);
      if (Array.isArray(parsedFavorites) && parsedFavorites.length > 0) {
        setFavorites(parsedFavorites);
      }
    }
  } catch (error) {
    console.error('Error loading favorites:', error);
    localStorage.removeItem('place-favorites');
  }
}, []);

// Save favorites to localStorage whenever favorites change (but not on initial empty load)
useEffect(() => {
  // Only save if we have loaded the initial data or if favorites is not empty
  const savedFavorites = localStorage.getItem('place-favorites');
  if (savedFavorites !== null || favorites.length > 0) {
    localStorage.setItem('place-favorites', JSON.stringify(favorites));
  }
}, [favorites]);

  const addToFavorites = (property) => {
    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(fav => fav._id === property._id);
      if (isAlreadyFavorite) {
        return prev;
      }
      return [...prev, property];
    });
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(prev => prev.filter(fav => fav._id !== propertyId));
  };

  const isFavorite = (propertyId) => {
    return favorites.some(fav => fav._id === propertyId);
  };

  const toggleFavorite = (property) => {
    if (isFavorite(property._id)) {
      removeFromFavorites(property._id);
    } else {
      addToFavorites(property);
    }
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    clearAllFavorites,
    favoritesCount: favorites.length
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};