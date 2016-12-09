var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

// we define the models we need using js--we don't need a schema file!
var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// puts a UserId column on each Message instance
// also gives us the `.setUser` method available
// after creating a new instance of Message
Message.belongsTo(User);
// enables bi-directional associations between Users and Messages
User.hasMany(Message);


User.sync();
Message.sync();
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.User = User;
exports.Message = Message;