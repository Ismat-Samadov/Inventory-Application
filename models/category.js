// models/category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageURL: String
});

module.exports = mongoose.model('Category', categorySchema);
