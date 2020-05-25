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
  const send = {
    id: 1,
    redWins: req.R,
    yellowWins: req.Y,
  };
  Connect4.updateOne({ id: 1 }, send)
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      throw err;
    });
};
