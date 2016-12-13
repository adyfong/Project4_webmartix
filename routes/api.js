const express = require('express');
const router = express.Router();
const {getQuestions, getAnswers, addAnswers} = require('../models/questions');

router.get('/questions', getQuestions, (req, res)=> {
  res.json(res.questions);
});

router.get('/answers', getAnswers, (req, res)=> {
  res.json(res.answers);
});

router.post('/answers', addAnswers, (req,res)=> {
  res.json('answers are safe and posted');
});


module.exports = router;
