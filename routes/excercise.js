const express = require('express')
const router = express.Router()
const Excercise = require('../models/excercise')
const Answer = require('../models/answer')

router.get('/', async (req, res) => {
  const excercise = await Excercise.find({}).lean().exec()

  res.status(200).json(excercise)
})

router.post('/', async (req, res) => {
  const excercise = await Excercise.create({
    question: req.body.question
  })

  res.status(201).json(excercise)
})

router.post('/answer', async (req, res) => {
  const answer = await Answer.create({
    name: req.body.name,
    answers: req.body.answers
  })

  res.status(201).json(answer)
})

router.delete('/', async (req, res) => {
  await Excercise.deleteMany({}).exec()

  res.status(204).json('ok')
})


module.exports = router