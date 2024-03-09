// populatedb.js
const Item = require('./models/item');
const Category = require('./models/category');

// Populate categories
const categories = [
  { name: 'Sedans', description: 'Four-door cars', imageURL: '/images/sedans.jpg' },
  { name: 'SUVs', description: 'Sport Utility Vehicles', imageURL: '/images/suvs.jpg' },
  // Add more categories as needed
];

Category.create(categories, (err, results) => {
  if (err) {
    console.error('Error populating categories:', err);
  } else {
    console.log('Categories populated successfully:', results);
  }
});

// Populate items
const items = [
  { name: 'Toyota Camry', description: 'Reliable sedan', category: 'Sedans', price: 25000, numberInStock: 10, imageURL: '/images/camry.jpg' },
  { name: 'Honda CR-V', description: 'Popular SUV', category: 'SUVs', price: 30000, numberInStock: 8, imageURL: '/images/crv.jpg' },
  // Add more items as needed
];

Item.create(items, (err, results) => {
  if (err) {
    console.error('Error populating items:', err);
  } else {
    console.log('Items populated successfully:', results);
  }
});
