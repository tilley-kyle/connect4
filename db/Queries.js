// const mongoose = require('mongoose');
const Connect4 = require('../db/Db.js');

const Queries = {
  winLogger: (object, team) => {
    if (team === 'R') {
      const update = {
        redWins: ++object.redWins,
        blueWins: object.blueWins
      };
      Connect4.findOneAndUpdate(object, update);
    } else if (team === 'B') {
      if (team === 'R') {
        const update = {
          redWins: object.redWins,
          blueWins: ++object.blueWins
        };
        Connect4.findOneAndUpdate(object, update);
      }
    }
  }
}

module.exports = Queries;