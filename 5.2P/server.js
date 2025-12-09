const express = require('express');
const booksRoutes = require('./routes/books.routes');

const PORT = 3006;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api/books', booksRoutes);

// Root + 404
app.get('/', (_req, res) => res.send('Welcome to the Books Catalog!'));
app.use((req, res) => res.status(404).json({ message: 'Not found' }));

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// Start
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
