const express = require('express')

const Question = require('../models/question')

const router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

// localhost:3000/api/questions: GET route for fetching all questions
router.get('/', async (req, res, next) => {
  await Question.find({}, (err, allQuestions) => {
    if (allQuestions) {
      res.send(allQuestions)
    } else {
      next('Unable to fetch all questions')
    }
  })
})

// localhost:3000/api/questions/add: POST route for adding a question
router.post('/add', isAuthenticated, async (req, res, next) => {
  const author = req.session.username
  const { questionText } = req.body
  try {
    await Question.create({ questionText, author })
    res.send('You added a question!')
  } catch {
    next('Unable to add question')
  }
})

// localhost:3000/api/questions/answer: POST route for adding an answer to a question
router.post('/answer', isAuthenticated, async (req, res, next) => {
  const { _id, answer } = req.body
  try {
    await Question.findByIdAndUpdate({ _id }, { answer })
    res.send('successfully answered the question')
  } catch {
    next('Unable to answer question')
  }
})

module.exports = router
