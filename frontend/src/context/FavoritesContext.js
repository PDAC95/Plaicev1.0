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
    const savedFavorites = localStorage.getItem('place-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error loading favorites:', error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('place-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (property) => {
    setFavorites(prev => {
      // Check if property is already in favorites
      const isAlreadyFavorite = prev.some(fav => fav._id === property._id);
      if (isAlreadyFavorite) {
        return prev; // Don't add duplicates
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