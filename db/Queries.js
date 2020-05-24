const Connect4 = require('./Db.js');

exports.getWins = (req, res) => {
  Connect4.findOne({ id: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.updateWins = (req, res) => {
  Connect4.findOneAndReplace({ id: 1 }, req)
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      throw err;
    });
};
