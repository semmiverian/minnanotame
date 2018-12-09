const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VocabSchema = new Schema({
  sub1: String,
  title: String,
  sub2: String
})


const Vocab = mongoose.model('vocab', VocabSchema)

module.exports = Vocab