import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = () => {
  // Sample data for properties
 // Sample data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Westmount, Waterloo, ON",
      price: "850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Downtown Condo",
      location: "King Street, Kitchener, ON",
      price: "520,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Cozy Suburban House",
      location: "Forest Heights, Kitchener, ON",
      price: "680,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Luxury Executive Home",
      location: "Beechwood, Waterloo, ON",
      price: "1,200,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Charming Bungalow",
      location: "Stanley Park, Kitchener, ON",
      price: "580,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,100",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "University District Townhouse",
      location: "Columbia Forest, Waterloo, ON",
      price: "750,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="property-list-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Discover our hand-picked selection of premium properties</p>
        </div>
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;