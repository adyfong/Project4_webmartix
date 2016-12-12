
const db = require('../lib/dbConnect.js');

function getQuestions(req, res, next) {
  db.any('SELECT * FROM surveys;')
    .then(questions => {
      res.questions = questions;
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getQuestions
}
