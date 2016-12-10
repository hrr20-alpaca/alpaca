var Sequelize = require('sequelize');
var db = new Sequelize('crashcourse', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Question = db.define('Question', {
  name: Sequelize.STRING,
  correct: Sequelize.STRING,
  wrong1: Sequelize.STRING,
  wrong2: Sequelize.STRING,
  wrong3: Sequelize.STRING,
  categories: Sequelize.STRING
});

// If we are adding columns or otherwise changing the schema
// we can add {force: true} inside .sync to drop the tables
// NOTE: THIS DELETES ALL THE DATA IN THE TABLE
User.sync();
Question.sync();

exports.User = User;
exports.Question = Question;