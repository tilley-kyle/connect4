const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/connect4', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', () => console.log('danger Will Robinson'));
db.once('on', () => console.log('we here now'));

const connect4Schema = new mongoose.Schema({
  redWins: Number,
  blueWins: Number
});

const Connect4 = mongoose.model('Connect4', connect4Schema);

module.exports = Connect4;