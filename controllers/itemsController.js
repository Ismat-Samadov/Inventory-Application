// itemsController.js
const Item = require('../models/item');

// Controller to create a new item
exports.createItem = async (req, res, next) => {
    try {
        const newItemData = req.body;
        const newItem = new Item(newItemData);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error('Error creating item:', err);
        res.status(500).json({ error: 'Failed to create item' });
    }
};

// Controller to get the edit page for an item by ID
exports.getEditItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.render('item_edit', { item: item });
    } catch (err) {
        console.error('Error getting item:', err);
        res.status(500).json({ error: 'Failed to get item' });
    }
};

// Controller to update an item by ID
exports.updateItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const updatedData = req.body;
        const item = await Item.findByIdAndUpdate(itemId, updatedData, { new: true });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error('Error updating item:', err);
        res.status(500).json({ error: 'Failed to update item' });
    }
};


// Read an item by ID
exports.getItemById = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error('Error getting item:', err);
        res.status(500).json({ error: 'Failed to get item' });
    }
};

// Update an item
exports.updateItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const updatedItemData = req.body;
        const item = await Item.findByIdAndUpdate(itemId, updatedItemData, { new: true });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error('Error updating item:', err);
        res.status(500).json({ error: 'Failed to update item' });
    }
};

// Delete an item
exports.deleteItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findByIdAndRemove(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
    } catch (err) {
        console.error('Error deleting item:', err);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};