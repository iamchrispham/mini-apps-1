const mysql = require('mysql');
const mypw = require('./databasepw.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mypw,
  database: 'multistep'
})

connection.connect();
console.log('MySQL Server ramped up!');

module.exports = connection;