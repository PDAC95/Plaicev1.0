import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Pagination from './Pagination';
import './PropertyList.css';
import axios from 'axios';

const PropertyList = ({ searchFilters }) => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = async (page = 1, filters = {}) => {
    try {
      setLoading(true);
      const params = {
        page,
        limit: 6,
        ...filters
      };

      console.log('Fetching with params:', params);
      
      const response = await axios.get(`http://localhost:5000/api/properties`, {
        params
      });
      
      setProperties(response.data.properties);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setError('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(1, searchFilters);
    setCurrentPage(1);
  }, [searchFilters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchProperties(pageNumber, searchFilters);
  };

  if (loading) {
    return (
      <section className="property-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Loading Properties...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="property-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="property-list-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Discover our hand-picked selection of premium properties</p>
          {searchFilters && Object.keys(searchFilters).length > 0 && (
            <div className="search-info">
              <p>Showing results for your search criteria</p>
            </div>
          )}
        </div>
        
        {properties.length === 0 ? (
          <div className="no-results">
            <h3>No properties found</h3>
            <p>Try adjusting your search criteria to find more properties.</p>
          </div>
        ) : (
          <>
            <div className="property-grid">
              {properties.map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PropertyList;