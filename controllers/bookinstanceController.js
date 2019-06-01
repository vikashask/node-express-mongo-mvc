var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');

// Display list of all bookinstance_list
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate('book')
    .exec(function(err, list_bookinstances) {
      res.send(list_bookinstances);
    });
};