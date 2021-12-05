const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

//Get questions randomly
router.get('/', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]);

    res.json(questions);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
