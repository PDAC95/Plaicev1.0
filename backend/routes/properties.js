const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET all properties with search and pagination
router.get('/', async (req, res) => {
  try {
    const { search, page = 1, limit = 6 } = req.query;
    let query = {};

    // Search functionality
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { type: { $regex: search, $options: 'i' } }
        ]
      };
    }

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
      total
    });
  } catch (error) {
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