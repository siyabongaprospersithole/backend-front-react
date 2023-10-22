// backend/routes/brands.js

const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// Get all brands
router.get('/', (req, res) => {

    const db = req.db; // Access the database connection from the request object


    const query = 'SELECT * FROM brands';
  
    db.all(query, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Map the rows to Brand model instances
      const brands = rows.map(row => {
        return  new Brand(row.id, row.name, row.image, row.published);
      });
  
      res.json( brands);
    });
  });

  
  
  module.exports = router;