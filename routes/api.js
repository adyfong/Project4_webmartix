const express = require('express');
const router = express.Router();
const {getQuestions} = require('../models/questions');

router.get('/questions', getQuestions, (req, res)=> {
  res.json(res.questions);
});

module.exports = router;
