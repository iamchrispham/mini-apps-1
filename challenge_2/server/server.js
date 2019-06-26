const express = require('express');
const bodyparser = require('body-parser'); // middleware
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.status(200).send('GET REQ!');
})

app.post('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("ERROR: ", err);
      res.end();
    } else {
      console.log('DATA:', data);
      // need to create a recursive function to go through tree
      // go through data of tree
      // break down each object of the tree
      // send as CSV data back to client
      res.status(201).send(data);
    }
  })
  var { firstName, lastName, county, city, role, sales } = req.body
  console.log('test:', req.body);
  // res.status(201).send(req.body)
})

app.listen(port, () => { console.log(`Listening to port ${port}...`)})

const filePath = path.join(__dirname, "../samples/sales_report.json")
console.log('FILEPATH to SALES_REPORT:', filePath);


