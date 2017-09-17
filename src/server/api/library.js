// Dependencies
import express from 'express';

// Data
import books from '../../data/books.json';

// Express Router
const Router = express.Router();

Router.get('/books', (req, res, next) => {
  res.json(books);
});

export default Router;