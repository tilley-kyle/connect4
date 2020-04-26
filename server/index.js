const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();

app.use(cors());
app.use(bp());

const port = 3001;
app.listen(port, () => console.log('Listentin on port ', port));