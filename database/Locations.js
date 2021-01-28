const mongoose = require('mongoose');
const db = require('./index.js');

const locationSchema = new mongoose.Schema({
  id: Number,
  title: String,
  host: String,
  location: String,
  rating: Number,
  pictures: Array,
  guests: Number,
  bedrooms: Array,
  bathrooms: Number,
  price: Number,
  description: String,
  amenities: Array
});

const Locations = mongoose.model('Locations', locationSchema);

module.exports = Locations;