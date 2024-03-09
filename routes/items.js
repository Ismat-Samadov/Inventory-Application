// routes/items.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Handle GET request to get the edit page for an item by ID
router.get('/:id/edit', itemsController.getEditItem);

// Handle POST request to update an item by ID
router.post('/:id', itemsController.updateItem);

// Handle POST request to create a new item
router.post('/', itemsController.createItem);

// Read
router.get('/:id', itemsController.getItemById);

// Update
router.put('/:id', itemsController.updateItem);

// Delete
router.delete('/:id', itemsController.deleteItem);

module.exports = router;