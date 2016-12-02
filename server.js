var express = require('express');
var request = require("request");
//making calls to node js api key
var app = express();
var rP = require("request-promise");

var apiKey = "2f4fe68403709710f406f4da7be00736"

//this is a route
//this gets executed when you reach "URL/"
app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.get('/tvshows',function (req, res) {

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function getMovie (movie){
  var options = { 
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        qs: { 
            query: movie, language: 'en-US', api_key: apiKey 
        },
        headers: { 'content-type': 'application/json' },
        body: {},
        json: true 
    };
    return rP(options);
    }

//getMovie('storks')

function getPerson (celebrity)
{var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/search/person',
  qs: { query: celebrity, language: 'en-US', api_key: apiKey },
  headers: { 'content-type': 'application/json' },
  body: {},
  json: true };

request(options, function (error, response, info) {
  if (error) throw new Error(error);
  console.log("Name of the movie: " + info.results[0].known_for[0].original_title);
  console.log("Summary: " + info.results[0].known_for[0].overview);
  // returns after digging through the numbers and returns the idea of result
});}


function getShow(program){
var options = { 
  method: 'GET',
    url: 'https://api.themoviedb.org/3/search/tv',
    qs: { page: '1',
        query: program,
        language: 'en-US',
        api_key: '2f4fe68403709710f406f4da7be00736' 
        },
    body: '{}' 
  };

return rP(options);
}

app.get('/movies222',function (req, res) {
    getMovie("Storks").then(function(value){
        //console.log(value.results[0]);
            res.send("Movie: " + value.results[0].original_title + " Summary: " + value.results[0].overview + " ID: " + value.results[0].id);   
    }, function(err){
        console.log(err);
    })
});

// function getGenre (back)
// {var options = { method: 'GET',
//   url: 'https://api.themoviedb.org/3/search/genre',
//   qs: { query: back, language: 'en-US', api_key: apiKey },
//   headers: { 'content-type': 'application/json' },
//   body: {},
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });}

// getGenre("Action")