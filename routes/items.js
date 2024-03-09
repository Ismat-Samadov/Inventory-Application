// routes/items.js

const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.post('/', function(req, res, next) {
  // Extract data from the request body
  const newItem = req.body;

  // Perform any necessary operations (e.g., save to database)
  // Example: Save the new item to the database
  Item.create(newItem)
    .then(item => {
      // Send a success response
      res.status(201).json({ message: 'Item created successfully', item });
    })
    .catch(err => {
      // Handle errors
      console.error('Error creating item:', err);
      res.status(500).json({ message: 'Internal server error' });
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
