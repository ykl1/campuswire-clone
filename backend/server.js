const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const express = require('express')
const path = require('path')

const AccountRoute = require('./routes/account')

const APIRoute = require('./routes/api')

const app = express()

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cw-database'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000,
  }),
)

// different for webpack, but gets the dist folder containing react files
app.use(express.static('dist'))
app.use(express.json())

app.use('/account', AccountRoute)
app.use('/api', APIRoute)

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// error handler middleware
app.use((err, req, res) => {
  res.status(500).send(`${err}`)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
