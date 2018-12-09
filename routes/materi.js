const express = require('express')
const router = express.Router()

const Materi = require('../models/materi')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: 'public/uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('photo'), async (req, res) => {
  const materi = await Materi.create({
    image: req.file.path,
    description: req.body.description,
    title: req.body.title
  })

  res.status(201).json(materi)
})

router.get('/', async (req, res) => {
  const allMateri = await Materi.find({}).lean().exec()

  res.json(allMateri)
})

router.delete('/', async (req, res) => {
  await Materi.deleteMany({})

  res.status(204).json('ok')
})

router.delete('/:id', async (req, res) => {
  await Materi.deleteOne({_id: req.params.id})

  res.status(204).json("ok")
})

router.patch('/:id', upload.single('photo'), async (req, res) => {
  const materi = await Materi.findByIdAndUpdate(req.params.id, {
    $push: {
      kalimat: {
        image: req.file.path,
        description: req.body.description
      }
    }
  }, {
    new: true
  })


  res.status(200).json(materi)
})


module.exports = router