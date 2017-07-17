const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  dateReleased: Date,
  uploader: String,
  playbackURL: String
}); 

module.exports = mongoose.model('Video', videoSchema);
