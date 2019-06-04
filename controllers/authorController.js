var Book = require('../models/book');
var Author = require('../models/author');

// Display list of all books
exports.author_list = function (req, res, next) {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      // succesful rendering
      res.send({list_authors})
    });
};
// Display list of all books
exports.createAuthor = function (req, res, next) {
  var author = new Author(
    {
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death
  });
  
  author.save(function (err) {
    if (err) {
      console.log('error',err);
      return next(err);      
    }
    res.send({mes:'author created'})
  });
};
