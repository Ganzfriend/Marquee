const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/marquee';

const db = mongoose.connect(mongoURI);

module.exports = db;