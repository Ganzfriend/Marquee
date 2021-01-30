const mongoose = require('mongoose');

const mongoURI = process.env.MONGODBURL || 'mongodb://localhost/marquee';

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = db;
