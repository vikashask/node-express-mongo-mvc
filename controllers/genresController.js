var Book = require('../models/book');
var Genre = require('../models/genre');

// Display list of all genre
exports.genre_list = (req, res) => {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
      if (err) { return next(err); }
      res.send(list_genres)
    });
};

// create genre
exports.create_genre = (req,res) => {
    // Check genre name is exists or not
    Genre.findOne({ 'name': req.body.name })
      .exec( function (err, found_genre) {
        console.log('Found Genre: '+ found_genre);
        if (err) return next(err);
        if (found_genre) {
          //genre exists
          res.send(found_genre.url);
        }
        else {
          let genre = new Genre({
            name:req.body.name
          })
          genre.save(function (err) {
            if (err) return next(err);
            res.send(genre.url);
          });
        }
      });

    }