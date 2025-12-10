const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  author: String,
  year: Number,
  genre: String,
  summary: String,
  price: mongoose.Schema.Types.Decimal128 
});

module.exports = mongoose.model('Book', bookSchema);
