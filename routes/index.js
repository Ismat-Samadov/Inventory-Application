// routes/index.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the Item model

// Route handler for the homepage
router.get('/', async function(req, res, next) {
    try {
        // Fetch items from the database
        const items = await Item.find().catch(error => {
            console.error("Error fetching items:", error);
            return [];
        });

        // Log the items
        console.log('Items:', items);

        // Render the index view with the items
        res.render('index', { items: items }); // Pass items to the template
    } catch (error) {
        console.error("Error in route handler:", error);
        next(error);
    }
});

module.exports = router;