const express = require('express');
const app = express();
const aws = require('./aws/index.js');
const mongoose = require('mongoose');

aws();

const MongoDB = mongoose.connect('mongodb://localhost:27017/sovereign').connection;

MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("MongoDB connection open");
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
