var express = require('express');
var request = require("request");
//making calls to node js api key
var app = express();

var apiKey = "2f4fe68403709710f406f4da7be00736"

//this is a route
//this gets executed when you reach "URL/"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  qs: { query: 'storks', language: 'en-US', api_key: apiKey },
  headers: { 'content-type': 'application/json' },
  body: {},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});