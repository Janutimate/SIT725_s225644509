const booksService = require('../services/books.service');

exports.getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    res.status(200).json({
      statusCode: 200,
      data: books,
      message: 'Books retrieved successfully'
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await booksService.getBookById(req.params.id);
    if (!book) {
    return res.status(404).json({ statusCode: 404, message: 'Book not found' });
    }
    res.status(200).json({ statusCode: 200, data: book });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
