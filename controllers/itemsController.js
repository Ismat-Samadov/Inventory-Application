// models/item.js

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    // Define item schema fields
    name: String,
    description: String,
    // Add more fields as needed
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
