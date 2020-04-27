const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const Connect4 = require('../db/db.js');

const app = express();

app.use(cors());
app.use(bp());

const port = 3001;
app.listen(port, () => console.log('Listentin on port ',port));
let data = {hi: 'howdy'}; //sending an object is easy, how to send just a string...
//get route
//eventually receives win total for two colors saved in database
app.get('/', (req, res) => {
  res.json(data);
});