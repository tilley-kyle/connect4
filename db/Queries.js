const Connect4 = require('../db/Db.js');

const queries = {
  winLogger: (object, team) => {
    if (team === 'R') {
      const update = {
        redWins: object.redWins + 1,
        blueWins: object.blueWins
      };
      Connect4.findOneAndUpdate(object, update);
    } else if (team === 'B') {
      const update = {
        redWins: object.redWins,
        blueWins: object.blueWins + 1
      };
      Connect4.findOneAndUpdate(object, update);
    }
  }
};

module.exports = queries;