// routes/items.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Handle POST request to create a new item
router.post('/', itemsController.createItem);

// Read
router.get('/:id', itemsController.getItemById);

// Update
router.put('/:id', itemsController.updateItem);

// Delete
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
