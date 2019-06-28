const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/public', (req, res)=>{
  res.status(200).send('GETREQ!');
})

app.use(express.static(path.join(__dirname, './client/dist')));
app.listen(port, () => { console.log(`Listening to port ${port}`)});