const mongoose = require('mongoose');

const CURRENT_YEAR = new Date().getFullYear();

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'id is required'],
    unique: true,
    immutable: true,
    match: [/^b\d+$/, 'id must be in format b<number>']
  },
  title: {
    type: String,
    required: [true, 'title is required'],
    trim: true,
    minlength: [2, 'title must be at least 2 characters']
  },
  author: {
    type: String,
    required: [true, 'author is required'],
    trim: true,
    minlength: [2, 'author must be at least 2 characters']
  },
  year: {
    type: Number,
    required: [true, 'year is required'],
    min: [1400, 'year must be after 1400'],
    max: [CURRENT_YEAR, 'year cannot be in the future'],
    validate: {
      validator: Number.isInteger,
      message: 'year must be an integer'
    }
  },
  genre: {
    type: String,
    required: [true, 'genre is required'],
    trim: true
  },
  summary: {
    type: String,
    required: [true, 'summary is required'],
    minlength: [10, 'summary must be at least 10 characters']
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: [true, 'price is required'],
    validate: {
      validator: v => v >= 0,
      message: 'price must be >= 0'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
