import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-price">${property.price}</div>
      </div>
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <div className="property-details">
          <span className="detail-item">{property.bedrooms} beds</span>
          <span className="detail-item">{property.bathrooms} baths</span>
          <span className="detail-item">{property.area} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;