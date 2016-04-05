/************
 * DATABASE *
 ************/

var db = require('../models'); // this get the index.js file which contains all of the models.

// GET /api/albums
function index(req, res) {
  // FILL ME IN !
  db.Album.find({}, function(err, albums){
    if (err) {
      console.log(err);
    }
    else {
      res.json(albums);
    }
    console.log(albums);
  });

}

function create(req, res) {
  var newAlbum = new db.Album({
    artistName: req.body.artistName,
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    genres: [req.body.genres]
  });

  newAlbum.save(function(err, album) {
    if (err) {
      console.log("an error occured: ", err);
      res.send(err);
    } else {
      console.log("saved ", album);
      res.json(album);
    }
  });

}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
