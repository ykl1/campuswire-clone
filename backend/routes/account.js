const express = require('express')

const User = require('../models/user')

const router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

// localhost:3000/account/signup: POST route for signup
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body
  try {
    await User.create({ username, password })
    res.send(`User ${username} has successfully signed up`)
  } catch {
    next(new Error('unsuccessful signup'))
  }
})

// localhost:3000/account/login: POST route for login
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  await User.findOne({ username, password }, (err, user) => {
    if (user) {
      req.session.username = username
      req.session.password = password
      res.send('successful login')
    } else {
      next(new Error('unsuccessful login'))
    }
  })
})

// localhost:3000/account/logout: POST route for logout
router.post('/logout', isAuthenticated, (req, res) => {
  req.session.username = ''
  req.session.password = ''
  res.send('successful logout')
})

// checking if user is logged in and what their username is.
router.post('/getSession', isAuthenticated, (req, res) => {
  res.send(req.session.username)
})

module.exports = router
