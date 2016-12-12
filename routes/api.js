const express = require('express');
const router = express.Router();
const {getQuestions, addAnswers} = require('../models/questions');

router.get('/questions', getQuestions, (req, res)=> {
  res.json(res.questions);
});

router.post('/answers', addAnswers, (req,res)=> {
  res.json('answers are safe and posted');
});


module.exports = router;
