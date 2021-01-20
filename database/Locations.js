const mongoose = require('mongoose');
const db = require('./index.js');

const locationSchema = new mongoose.Schema({
  title: String,
  host: String,
  location: String,
  rating: Number,
  pictures: Array,
  guests: Number,
  bedrooms: Number,
  price: Number,
  description: String,
  amenities: Array
});

const Locations = mongoose.model('Locations', locationSchema);

module.exports = Locations;