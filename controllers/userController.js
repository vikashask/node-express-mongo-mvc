var User = require("../models/user");

// Display list of all books
exports.user_list = function (req, res, next) {
  Book.find({}, "title author ")
    .populate("author")
    .exec(function (err, list_books) {
      if (err) return next(err);
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};
