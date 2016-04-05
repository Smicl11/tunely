var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

//Require Album model.
module.exports.Album = require("./album.js");

//Require Song model.
module.exports.Song = require("./song.js");
