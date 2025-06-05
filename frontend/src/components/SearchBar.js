import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ search: searchTerm });
  };

  const handleAdvancedSearch = () => {
    setShowAdvancedSearch(true);
  };

  const handleAdvancedSearchSubmit = (filters) => {
    console.log('Advanced search filters:', filters);
    onSearch(filters);
  };

  const handleCloseAdvancedSearch = () => {
    setShowAdvancedSearch(false);
  };

  return (
    <>
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

      {showAdvancedSearch && (
        <AdvancedSearch 
          onSearch={handleAdvancedSearchSubmit}
          onClose={handleCloseAdvancedSearch}
        />
      )}
    </>
  );
};

export default SearchBar;