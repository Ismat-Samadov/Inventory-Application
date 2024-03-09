// models/item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true // Ensures the name is unique
  },
  description: String,
  category: String,
  price: Number,
  numberInStock: Number,
  imageURL: String
});

module.exports = mongoose.model('Items', itemSchema);
