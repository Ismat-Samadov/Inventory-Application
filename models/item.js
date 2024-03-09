// models/item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true 
  },
  description: String,
  category: String,
  price: Number,
  numberInStock: Number,
  imageURL: String
});


module.exports = mongoose.model('Item', itemSchema);
