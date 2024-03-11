// routes/index.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the Item model
const mongoose = require('mongoose');

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


router.delete('/items/:id', async function(req, res, next) {
    console.log('Deleting item with ID:', req.params.id); // Log the ID

    let id;
    try {
        id = new mongoose.Types.ObjectId(req.params.id);
    } catch (err) {
        return res.status(400).json({ success: false, error: 'Invalid ID format' });
    }

    try {
        const deletedItem = await Item.findOneAndDelete({ _id: id });

        if (!deletedItem) {
            console.log('No item found with this ID');
            return res.status(404).json({ success: false, error: 'No item found with this ID' });
        }

        console.log('Deleted item:', deletedItem); // Log the deleted item
        res.json({ success: true });
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});


module.exports = router;