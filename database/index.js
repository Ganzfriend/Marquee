const mongoose = require('mongoose');
//const mongoURI = 'mongodb://localhost/marquee_4';
//const mongoURI = 'mongodb://0.0.0.0:3027/marquee';
const mongoURI = 'mongodb://database/marquee';

const db = mongoose.connect(mongoURI);

module.exports = db;