const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerScheme = new Schema({
  name: String,
  answers: [
    {
      question: String,
      answer: String
    }
  ]
})

const Answer = mongoose.model('answer', AnswerScheme)

module.exports = Answer