const express = require('express');
const nodemon = require('nodemon');

var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)