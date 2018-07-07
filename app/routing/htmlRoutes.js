var path = require ("path");

module.exports = function(app) {
   
// Get route to /survey which should display survey page
app.get('/survey', function(req, res) {
   res.sendFile('survey.html', { root: path.join(__dirname, '../app/public') });
});


// a catch all route that leads to home.html
app.get('/', function(req, res) {
   res.sendFile('home.html', { root: path.join(__dirname, '../app/public') });
});

};
