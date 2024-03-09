//itemsController.js is the controller for handling item-related operations such as creating, fetching, updating, and deleting items. It uses the Item model to interact with the database.
const Item = require('../models/item');
const { check, validationResult } = require('express-validator');
const Category = require('../models/category');


// Controller to update a category by ID
exports.updateCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const updatedData = req.body;
        const category = await Category.findByIdAndUpdate(categoryId, updatedData, { new: true });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        console.error('Error updating category:', err);
        res.status(500).json({ error: 'Failed to update category' });
    }
};

// Controller to delete a category by ID
exports.deleteCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findByIdAndRemove(categoryId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error('Error deleting category:', err);
        res.status(500).json({ error: 'Failed to delete category' });
    }
};

// Controller to get a category by ID
exports.getCategoryById = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        console.error('Error getting category:', err);
        res.status(500).json({ error: 'Failed to get category' });
    }
};

// Define other controller functions here...
// Custom Error class
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

// Controller to create a new item
exports.createCategory = async (req, res, next) => {
    try {
        const newCategoryData = req.body;
        const existingCategory = await Category.findOne({ name: newCategoryData.name });
        if (existingCategory) {
            newCategoryData.name = newCategoryData.name + "_1";
        }
        const newCategory = new Category(newCategoryData);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        console.error('Error creating category:', err);
        res.status(500).json({ error: 'Failed to create category' });
    }
};

// Controller to retrieve an item by its ID
exports.getItemById = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findById(itemId);
        if (!item) {
            throw new ErrorHandler(404, 'Item not found');
        }
        res.json(item);
    } catch (err) {
        next(err);
    }
};

// Controller to update an existing item
exports.updateItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const updateData = req.body;
        const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });
        if (!updatedItem) {
            throw new ErrorHandler(404, 'Item not found');
        }
        res.json(updatedItem);
    } catch (err) {
        next(err);
    }
};

// Controller to delete an existing item
exports.deleteItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if (!deletedItem) {
            throw new ErrorHandler(404, 'Item not found');
        }
        res.json(deletedItem);
    } catch (err) {
        next(err);
    }
};

