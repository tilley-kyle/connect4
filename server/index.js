const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const { getWins } = require('../db/Queries.js');

const app = express();

app.use(cors());
app.use(bp.json());

const port = 3001;
app.listen(port, () => console.log('Listentin on port ', port));


// get route
// eventually receives win total for two colors saved in database
app.get('/get-wins', (req, res) => {
  getWins(req, res);
});


app.put('/update-wins', (req, res) => {
  console.log(req.body);
});
