var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");

// Display list of all books
exports.book_list = function (req, res, next) {
  Book.find({}, "title author ")
    .populate("author")
    .exec(function (err, book_list) {
      if (err) return next(err);
      res.send({ book_list });
    });
};

exports.addBook = (req, res, next) => {
  let book = new Book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    isbn: req.body.isbn,
    genre: req.body.genre,
  });
  book.save((err) => {
    if (err) return next(err);
    res.send("book save");
  });
};
