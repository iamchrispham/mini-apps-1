const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const connection = require('./database/index.js');
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true })); // middelware
app.use(bodyparser.json()); // midelware
app.use(express.static(path.join(__dirname, '/public'))); // mounter

// controller
app.get('/', (req, res) => {
  res.status(200).send('GET REQ!');
})

app.post('/', (req, res) => {
  res.status(201).send('POST REQ!');
})


app.listen(port, () => console.log(`Listening to port ${port}`));
