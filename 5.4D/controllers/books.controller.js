const booksService = require('../services/books.service');

exports.getAllBooks = async (_req, res) => {
  const books = await booksService.getAllBooks();
  res.status(200).json({
    developedBy: 's225644509',
    data: books
  });
};

exports.getBookById = async (req, res) => {
  const book = await booksService.getBookById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json({ data: book });
};

exports.createBook = async (req, res) => {
  try {
    const book = await booksService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Book with this id already exists' });
    }
    res.status(err.status || 400).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await booksService.updateBook(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message });
  }
};
