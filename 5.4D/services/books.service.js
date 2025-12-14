const Book = require('../models/books.model');

const ALLOWED_FIELDS = [
  'id', 'title', 'author', 'year', 'genre', 'summary', 'price'
];

function pickAllowedFields(payload) {
  const keys = Object.keys(payload);
  const invalid = keys.filter(k => !ALLOWED_FIELDS.includes(k));
  if (invalid.length) {
    const err = new Error(`Unexpected fields: ${invalid.join(', ')}`);
    err.status = 400;
    throw err;
  }
  return payload;
}

async function getAllBooks() {
  return Book.find().lean({ getters: true });
}

async function getBookById(id) {
  return Book.findOne({ id }).lean({ getters: true });
}

async function createBook(payload) {
  pickAllowedFields(payload);
  const book = new Book(payload);
  return book.save();
}

async function updateBook(id, payload) {
  pickAllowedFields(payload);
  if ('id' in payload) {
    const err = new Error('id cannot be updated');
    err.status = 400;
    throw err;
  }

  const updated = await Book.findOneAndUpdate(
    { id },
    payload,
    { new: true, runValidators: true }
  );

  return updated;
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
};
