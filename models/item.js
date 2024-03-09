// models/item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Ensure uniqueness of the name field
  },
  description: String,
  category: String,
  price: Number,
  numberInStock: Number,
  imageURL: String
});

// Middleware to append "_1" to the name if it already exists
itemSchema.pre('save', async function(next) {
  const self = this;
  const existingItem = await self.constructor.findOne({ name: self.name });
  if (existingItem) {
    self.name += '_1';
  }
  next();
});

module.exports = mongoose.model('Item', itemSchema);
