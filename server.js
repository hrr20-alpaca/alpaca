
var express = require('express');
var db = require('./db');

var axios = require('axios');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
//var router = require('./routes.js');

var controller = require('./controllers');
var router = require('express').Router();

// initialize express to the app variable
var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 1337);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

//Connect controller methods to their corresponding routes
router.get('/questions', controller.questions.get);

router.post('/questions', controller.questions.post);

//router.get('/users', controller.users.get);

//router.post('/users', controller.users.post);
// Set up our routes
app.use('/', router);

// Serve the client files
app.use(express.static('public'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


module.exports = router;

// To be migrated to a separate file. Please do not delete. //

// axios.post('http://127.0.0.1:1337/questions', {
//   name: '2+2',
//   correct: '4',
//   wrong1: '5',
//   wrong2: '6',
//   wrong3: '7',
// })
// .then(function(res) {
//   console.log(res);
// })
// .catch(function (error) {
//     console.log(error);
// });
