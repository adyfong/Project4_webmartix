
const db = require('../lib/dbConnect.js');

function getQuestions(req, res, next) {
  db.any('SELECT * FROM surveys;')
    .then(questions => {
      res.questions = questions;
      next();
    })
    .catch(error => next(error));
}


function getAnswers(req, res, next) {
  db.any('SELECT a1, a2, a3, a4, a5 FROM answers WHERE user_id=3;')
    .then(answers => {
      res.answers = answers;
      next();
    })
    .catch(error => next(error));
}



function addAnswers(req,res, next) {
   console.log('Inside Model' + req.body.selectedOption);
   console.log('Inside Model Array' + req.body.selectedOption[0]);

   db.one(`
     INSERT INTO answers (a1, a2, a3, a4, a5)
     VALUES ( $1, $2, $3, $4, $5) returning *;`,
     [req.body.selectedOption[0], req.body.selectedOption[1],req.body.selectedOption[2],req.body.selectedOption[3],req.body.selectedOption[4]])
    .then(next())
    .catch(error => next(error));
}


module.exports = {
  getQuestions,
  getAnswers,
  addAnswers
}
