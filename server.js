var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());








// Get route to /survey which should display survey page
app.get('/survey', function(req, res) {
  res.sendFile('survey.html', { root: path.join(__dirname, '../friendfinder/app/public') });
});


// a catch all route that leads to home.html
app.get('/', function(req, res) {
  res.sendFile('home.html', { root: path.join(__dirname, '../friendfinder/app/public') });
});



// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function () {
  console.log("listening on PORT" + PORT);
});