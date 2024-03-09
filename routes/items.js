// routes/items.js
const itemsController = require('../controllers/itemsController');
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Handle POST request to create a new item
router.post('/', function(req, res, next) {
    // Extract data from the request body
    const newItemData = req.body;

    // Create a new item using the data
    const newItem = new Item(newItemData);

    // Save the new item to the database
    newItem.save()
        .then(savedItem => {
            res.status(201).json(savedItem); // Send a success response with the saved item
        })
        .catch(err => {
            console.error('Error saving item:', err);
            res.status(500).json({ error: 'Failed to save item' }); // Send an error response if saving fails
        });
});

// Create
router.post('/', itemsController.createItem);

// Read
router.get('/:id', itemsController.getItemById);

// Update
router.put('/:id', itemsController.updateItem);

// Delete
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
