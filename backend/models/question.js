const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  questionText: String,
  answer: String,
  author: String,
})

module.exports = model('Question', questionSchema)
