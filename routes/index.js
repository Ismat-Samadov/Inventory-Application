// routes/index.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Assuming you have a model for items

// GET homepage
router.get('/', async (req, res, next) => {
    try {
        // Query the database to fetch all items
        const items = await Item.find();
        // Render the homepage template and pass the items to it
        res.render('index', { items });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
