var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Require Song model.
var Song = require("./song.js");


var AlbumSchema = new Schema ({
  artistName: String,
  name: String,
  songs: [Song.schema],
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
