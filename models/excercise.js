const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExcerciseSchema = new Schema({
  question: String
})

const Excercise = mongoose.model('excercise', ExcerciseSchema)

module.exports = Excercise