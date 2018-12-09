const express = require('express')
const router = express.Router()
const Vocab = require('../models/kosakata')

router.get('/', async (req, res) => {
  const kosakata = await Vocab.find({})
    .lean()
    .exec()

  res.status(200).json(kosakata)
})

router.post('/', async (req, res) => {
  const kosakata = await Vocab.create({sub1: req.body.sub1, sub2: req.body.sub2, title: req.body.title})

  res.status(201).json(kosakata)
})

router.delete('/', async (req, res) => {
  await Vocab.deleteMany({}).exec()

  res.status(204).send('ok')
})
module.exports = router
