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
      var newData = JSON.parse(data);
      newData.children.push(req.body);
      res.status(201).send(treeSearch(newData));
    }
  })
})

app.listen(port, () => { console.log(`Listening to port ${port}...`) })

const filePath = path.join(__dirname, "../samples/sales_report.json")
console.log('FILEPATH to SALES_REPORT:', filePath);


// auxiliary function
var treeSearch = (tree, array) => {
  var newArr = array || [];

  if (newArr.length === 0) { // push in parent node
    var tempArr = [];
    for (var node in tree) {
      if (!Array.isArray(tree[node])) {
        tempArr.push(tree[node]);
      }
    }
    newArr.push(tempArr.join(','));
  }

  for (var i = 0; i < tree.children.length; i++) { // push in children
    var tempArr = [tree.children[i]['firstName'],
      tree.children[i]['lastName'],
      tree.children[i]['county'],
      tree.children[i]['city'],
      tree.children[i]['role'],
      tree.children[i]['sales']
    ];
    var str = tempArr.join(',');
    newArr.push(str);
    treeSearch(tree.children[i], newArr);
  }
  return newArr;
}