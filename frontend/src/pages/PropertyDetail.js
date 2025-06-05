import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching property:', error);
        setError('Property not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="property-detail-container">
        <div className="loading">Loading property details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="property-detail-container">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={handleBack} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="property-detail-container">
      <div className="property-detail">
        <button onClick={handleBack} className="back-button">
          ← Back to Properties
        </button>
        
        <div className="property-header">
          <div className="property-image-large">
            <img src={property.image} alt={property.title} />
            <div className="property-price-large">${property.price}</div>
          </div>
        </div>

        <div className="property-info-detailed">
          <div className="property-main-info">
            <h1>{property.title}</h1>
            <p className="property-location-large">📍 {property.location}</p>
            
            <div className="property-specs">
              <div className="spec-item">
                <span className="spec-icon">🛏️</span>
                <span className="spec-text">{property.bedrooms} Bedrooms</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🚿</span>
                <span className="spec-text">{property.bathrooms} Bathrooms</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">📐</span>
                <span className="spec-text">{property.area} sq ft</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🏠</span>
                <span className="spec-text">{property.type}</span>
              </div>
            </div>

            <div className="property-description">
              <h3>About This Property</h3>
              <p>
                {property.description || 
                 `Beautiful ${property.type} located in ${property.location}. This stunning property features ${property.bedrooms} bedrooms and ${property.bathrooms} bathrooms across ${property.area} square feet of living space. Perfect for families looking for comfort and convenience in a prime location.`
                }
              </p>
            </div>

            <div className="contact-section">
              <h3>Interested in this property?</h3>
              <div className="contact-buttons">
                <button className="contact-btn primary">Contact Agent</button>
                <button className="contact-btn secondary">Schedule Viewing</button>
                <button className="contact-btn secondary">Save to Favorites</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;