// routes/index.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Assuming your item model is defined in 'item.js'

// Handle GET request for the homepage
router.get('/', async (req, res, next) => {
    try {
        // Query the database for items
        const items = await Item.find();

        // Render the 'index' view and pass the items to the template
        res.render('index', { items: items });
    } catch (err) {
        // Handle errors
        console.error('Error retrieving items:', err);
        next(err);
    }
});

module.exports = router;

