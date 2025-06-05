import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${property._id}`);
  };

// Format price with commas - with safety check
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

// Format area with commas - with safety check
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

  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-price">${formatPrice(property.price)}</div>
      </div>
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <div className="property-details">
          <span className="detail-item">{property.bedrooms || 0} beds</span>
          <span className="detail-item">{property.bathrooms || 0} baths</span>
          <span className="detail-item">{formatArea(property.area)} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;