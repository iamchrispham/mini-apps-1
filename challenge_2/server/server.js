const express = require('express');
const bodyparser = require('body-parser'); // middleware
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.status(200).send('GET REQ!');
})

app.post('/', (req, res) => {
  var { firstName, lastName, county, city, role, sales } = req.body
  console.log('test:', req.body);
  res.status(201).send(req.body)
})

app.listen(port, () => { console.log(`Listening to port ${port}...`)})



