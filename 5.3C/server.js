const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const booksRoutes = require('./routes/books.routes');

const PORT = 3006;
const app = express();

mongoose.connect("mongodb://localhost:27017/booksdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("DB connection error:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/books', booksRoutes);

// Root
app.get('/', (_req, res) => res.send('Welcome to the Books Catalog API'));

// 404
app.use((req, res) => res.status(404).json({ message: 'Not found' }));

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
