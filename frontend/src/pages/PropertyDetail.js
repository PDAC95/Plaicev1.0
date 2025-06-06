import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactForm from '../components/ContactForm';
import { useFavorites } from '../context/FavoritesContext';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

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

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price.toLocaleString();
  }
  // If it's a string, try to parse it and remove commas
  if (typeof price === 'string') {
    const numPrice = parseFloat(price.replace(/,/g, ''));
    if (!isNaN(numPrice)) {
      return numPrice.toLocaleString();
    }
  }
  return price || '0';
};

const formatArea = (area) => {
  if (typeof area === 'number') {
    return area.toLocaleString();
  }
  // If it's a string, try to parse it and remove commas
  if (typeof area === 'string') {
    const numArea = parseFloat(area.replace(/,/g, ''));
    if (!isNaN(numArea)) {
      return numArea.toLocaleString();
    }
  }
  return area || '0';
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

  if (!property) {
    return null;
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
            <div className="property-price-large">${formatPrice(property.price)}</div>
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
                <span className="spec-text">{formatArea(property.area)} sq ft</span>
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
                 `Beautiful ${property.type} located in ${property.location}. This stunning property features ${property.bedrooms} bedrooms and ${property.bathrooms} bathrooms across ${formatArea(property.area)} square feet of living space. Perfect for families looking for comfort and convenience in a prime location.`
                }
              </p>
            </div>

            <div className="contact-section">
              <h3>Interested in this property?</h3>
              <div className="contact-buttons">
                <button className="contact-btn primary" onClick={handleContactClick}>
                  Contact Agent
                </button>
                <button className="contact-btn secondary" onClick={handleContactClick}>
                  Schedule Viewing
                </button>
                <button 
                  className={`contact-btn ${isFavorite(property._id) ? 'primary' : 'secondary'}`}
                  onClick={() => toggleFavorite(property)}
                >
                  {isFavorite(property._id) ? '❤️ Remove from Favorites' : '🤍 Save to Favorites'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-form-overlay">
            <ContactForm 
              propertyTitle={property.title}
              onClose={handleCloseContact}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;