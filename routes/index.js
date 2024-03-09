// routes/index.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Assuming this is your Item model

router.get('/', async (req, res) => {
    try {
        // Fetch items from the database
        const items = await Item.find();

        // Render the index view with the items data
        res.render('index', { items: items });
    } catch (error) {
        // Handle errors
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
