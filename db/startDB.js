const Connect4 = require('./Db.js');

const newDB = new Connect4({
  id: 1,
  redWins: 0,
  blueWins: 0,
});
newDB.save();
