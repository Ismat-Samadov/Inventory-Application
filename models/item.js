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

itemSchema.pre('save', async function(next) {
  const self = this;
  const existingItem = await self.constructor.findOne({ name: self.name });
  if (existingItem) {
    self.name += '_1';
  }
  next();
});

module.exports = mongoose.model('Item', itemSchema);
