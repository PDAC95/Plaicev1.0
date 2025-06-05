import React, { useState } from 'react';
import './AdvancedSearch.css';

const AdvancedSearch = ({ onSearch, onClose }) => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minArea: '',
    maxArea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build search query from filters
    const searchParams = {};
    
    // Add non-empty filters to search params
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key] !== '') {
        searchParams[key] = filters[key];
      }
    });

    console.log('Advanced search filters:', searchParams);
    onSearch(searchParams);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      minArea: '',
      maxArea: ''
    });
  };

  const priceOptions = [
    { value: '', label: 'Any Price' },
    { value: '0', label: '$0' },
    { value: '300000', label: '$300,000' },
    { value: '500000', label: '$500,000' },
    { value: '700000', label: '$700,000' },
    { value: '1000000', label: '$1,000,000' },
    { value: '1500000', label: '$1,500,000' },
    { value: '2000000', label: '$2,000,000+' }
  ];

  const roomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' }
  ];

  return (
    <div className="advanced-search-overlay">
      <div className="advanced-search-container">
        <form className="advanced-search-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Advanced Search</h3>
            <button type="button" className="close-button" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="filters-grid">
            {/* Location and Type */}
            <div className="filter-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleChange}
                placeholder="City, neighborhood..."
              />
            </div>

            <div className="filter-group">
              <label htmlFor="type">Property Type</label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <label htmlFor="minPrice">Min Price</label>
              <select
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
              >
                {priceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="maxPrice">Max Price</label>
              <select
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
              >
                {priceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms and Bathrooms */}
            <div className="filter-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
              >
                {roomOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleChange}
              >
                {roomOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Area Range */}
            <div className="filter-group">
              <label htmlFor="minArea">Min Area (sq ft)</label>
              <input
                type="number"
                id="minArea"
                name="minArea"
                value={filters.minArea}
                onChange={handleChange}
                placeholder="Min square feet"
                min="0"
              />
            </div>

            <div className="filter-group">
              <label htmlFor="maxArea">Max Area (sq ft)</label>
              <input
                type="number"
                id="maxArea"
                name="maxArea"
                value={filters.maxArea}
                onChange={handleChange}
                placeholder="Max square feet"
                min="0"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="reset-button" onClick={handleReset}>
              Reset Filters
            </button>
            <button type="submit" className="search-button">
              Search Properties
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearch;