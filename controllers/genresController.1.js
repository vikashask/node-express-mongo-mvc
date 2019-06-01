var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');

// Display list of all genre
exports.genre_list = function (req, res) {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
      if (err) { return next(err); }
      res.send(list_genres)
    });
};