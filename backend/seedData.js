const mongoose = require('mongoose');
const Property = require('./models/Property');
require('dotenv').config();

const properties = [
  {
    title: "Modern Family Home",
    location: "Westmount, Waterloo, ON",
    price: "850,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,400",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "Downtown Condo",
    location: "King Street, Kitchener, ON",
    price: "520,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "condo"
  },
  {
    title: "Cozy Suburban House",
    location: "Forest Heights, Kitchener, ON",
    price: "680,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "Luxury Executive Home",
    location: "Beechwood, Waterloo, ON",
    price: "1,200,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "Charming Bungalow",
    location: "Stanley Park, Kitchener, ON",
    price: "580,000",
    bedrooms: 2,
    bathrooms: 1,
    area: "1,100",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "University District Townhouse",
    location: "Columbia Forest, Waterloo, ON",
    price: "750,000",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,000",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "townhouse"
  },
  {
    title: "Waterfront Cottage",
    location: "Laurel Creek, Waterloo, ON",
    price: "920,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,900",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "Historic Victorian",
    location: "Victoria Park, Kitchener, ON",
    price: "695,000",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,100",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  },
  {
    title: "New Construction",
    location: "RIM Park, Waterloo, ON",
    price: "825,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    type: "house"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/place-mvp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing properties
    await Property.deleteMany({});
    console.log('Cleared existing properties');

    // Insert new properties
    await Property.insertMany(properties);
    console.log('Sample properties added successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();