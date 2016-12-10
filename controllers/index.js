var db = require('../db');

module.exports = {
  questions: {
    get: function (req, res) {
      db.Question.findAll()
        .then(function(questions) {
          res.json(questions);
        });
    },
    post: function (req, res) {
          db.Question.create({
            name: req.body.name,
            correct: req.body.correct,
            wrong1: req.body.wrong1,
            wrong2: req.body.wrong2,
            wrong3: req.body.wrong3,
          }).then(function(question) {
            res.sendStatus(201);
          });
    }
  }
};
