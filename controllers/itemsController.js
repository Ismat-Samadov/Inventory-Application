const Item = require('../models/item');

// Controller to create a new item
exports.createItem = async (req, res, next) => {
    try {
        // Extract data from the request body
        const newItemData = req.body;

        // Check if the item name already exists
        const existingItem = await Item.findOne({ name: newItemData.name });
        if (existingItem) {
            newItemData.name = newItemData.name + "_1"; // Append "_1" to the name
        }

        // Create a new item using the data
        const newItem = new Item(newItemData);

        // Save the new item to the database
        const savedItem = await newItem.save();

        res.status(201).json(savedItem); // Send a success response with the saved item
    } catch (err) {
        console.error('Error creating item:', err);
        res.status(500).json({ error: 'Failed to create item' }); // Send an error response if creation fails
    }
};

// Controller to retrieve an item by its ID
exports.getItemById = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error('Error fetching item:', err);
        res.status(500).json({ error: 'Failed to fetch item' });
    }
};

// Controller to update an existing item
exports.updateItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const updateData = req.body;
        const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        console.error('Error updating item:', err);
        res.status(500).json({ error: 'Failed to update item' });
    }
};

// Controller to delete an existing item
exports.deleteItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(deletedItem);
    } catch (err) {
        console.error('Error deleting item:', err);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};
