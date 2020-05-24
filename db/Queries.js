const Connect4 = require('./Db.js');

exports.getWins = (req, res) => {
  Connect4.findOne({ id: 1 })
    .then((data) => {
      res.send(data);
    });
};
