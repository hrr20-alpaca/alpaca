// dependencies
// npm install --save express
// npm install --save-dev morgan
//
var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
//var router = require('./routes.js');

var controller = require('./controllers');
var router = require('express').Router();



var test = {

  name: '2+2?',
  Correct: '4',
  Wrong1: [false, '3'],
  Wrong2: [false, '2'],
  Wrong3: [false, '6'],
  testID: 234, //INT primary key auto-incremented
  categoryID: 123, //INT  foreign key for category such as math, spelling, ec.
  difficultyLevel: 2 //INT required false

}









//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

// initialize express to the app variable
var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 1337);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

//// ROUTES //////




module.exports = router;
