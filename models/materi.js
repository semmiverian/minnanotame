const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MateriSchema = new Schema({
  image: String,
  description: String,
  title: String,
  kalimat: [
    {
      image: String,
      description: String
    }
  ]
})

const Materi = mongoose.model('materi', MateriSchema)

module.exports = Materi
