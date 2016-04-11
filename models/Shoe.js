var mongoose = require('mongoose');

var ShoeSchema = new mongoose.Schema({
  size: Number,
  color: String,
  brand: String
});
// size, color, shoela

module.exports = mongoose.model('Shoe', ShoeSchema);
