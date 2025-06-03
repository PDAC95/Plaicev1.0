import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleAdvancedSearch = () => {
    // Placeholder for advanced search functionality
    alert('Advanced search coming soon!');
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Enter location, property type, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        <button type="button" className="advanced-search-btn" onClick={handleAdvancedSearch}>
          Advanced Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;