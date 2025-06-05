const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET all properties with search and pagination
router.get('/', async (req, res) => {
  try {
    const { 
      search, 
      page = 1, 
      limit = 6,
      location,
      type,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms,
      minArea,
      maxArea
    } = req.query;

    let query = {};

    // Basic text search
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { type: { $regex: search, $options: 'i' } }
        ]
      };
    }

    // Advanced filters
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    if (type) {
      query.type = type;
    }

    if (bedrooms) {
      query.bedrooms = { $gte: parseInt(bedrooms) };
    }

    if (bathrooms) {
      query.bathrooms = { $gte: parseInt(bathrooms) };
    }

    // Price filtering (remove commas and convert to number)
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        const minPriceNum = parseInt(minPrice);
        if (minPriceNum > 0) {
          query.price.$gte = minPriceNum;
        }
      }
      if (maxPrice) {
        const maxPriceNum = parseInt(maxPrice);
        if (maxPriceNum > 0) {
          query.price.$lte = maxPriceNum;
        }
      }
    }

    // Area filtering (remove commas and convert to number)
    if (minArea || maxArea) {
      query.area = {};
      if (minArea) {
        const minAreaNum = parseInt(minArea);
        if (minAreaNum > 0) {
          query.area.$gte = minAreaNum;
        }
      }
      if (maxArea) {
        const maxAreaNum = parseInt(maxArea);
        if (maxAreaNum > 0) {
          query.area.$lte = maxAreaNum;
        }
      }
    }

    console.log('Query filters:', query);

    const startIndex = (page - 1) * limit;
    const properties = await Property.find(query)
      .skip(startIndex)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Property.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.json({
      properties,
      currentPage: parseInt(page),
      totalPages,
      total,
      filters: req.query
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET single property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new property
router.post('/', async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;