var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');

// Display list of all books
exports.author_list = function (req, res, next) {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      // succesful rendering
      res.send({list_authors})
    });
};