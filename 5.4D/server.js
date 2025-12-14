const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const booksRoutes = require('./routes/books.routes');

const PORT = 3006;
const app = express();

mongoose.connect('mongodb://localhost:27017/booksdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/books', booksRoutes);

// Integrity check
app.get('/api/integrity-check42', (_req, res) => res.sendStatus(204));

// Root
app.get('/', (_req, res) => res.send('Books API'));

// Errors
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
