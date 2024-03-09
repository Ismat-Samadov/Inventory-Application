// routes/categories.js

const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Handle GET request to get a category by ID
router.get('/:id', categoriesController.getCategoryById);

// Handle PUT request to update a category by ID
router.put('/:id', categoriesController.updateCategory);

// Handle DELETE request to delete a category by ID
router.delete('/:id', categoriesController.deleteCategory);

// Handle POST request to create a new category
router.post('/', categoriesController.createCategory);

// Read
router.get('/:id', categoriesController.getCategoryById);

// Update
router.put('/:id', categoriesController.updateCategory);

// Delete
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;