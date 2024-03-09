// populatedb.js
const mongoose = require('mongoose');
const Item = require('./models/item');
const Category = require('./models/category');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/inventory_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Populate categories
    Category.create([
      { name: 'Sedans', description: 'Four-door cars' },
      { name: 'SUVs', description: 'Sport Utility Vehicles' }
      // Add more categories as needed
    ])
      .then(categories => {
        console.log('Categories populated:', categories);
        // Populate items
        Item.create([
          { name: 'Toyota Camry', description: 'Reliable sedan', category: categories[0]._id, price: 25000, numberInStock: 10 },
          { name: 'Honda CR-V', description: 'Popular SUV', category: categories[1]._id, price: 30000, numberInStock: 8 }
          // Add more items as needed
        ])
          .then(items => {
            console.log('Items populated:', items);
            mongoose.connection.close();
          })
          .catch(err => console.error('Error populating items:', err));
      })
      .catch(err => console.error('Error populating categories:', err));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
