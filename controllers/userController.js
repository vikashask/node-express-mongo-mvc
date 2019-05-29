var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');

// Display list of all books
exports.book_list = function (req, res, next) {
  Book.find({}, 'title author ')
    .populate('author')
    .exec(function (err, list_books) {
      if (err) return next(err);
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });
};