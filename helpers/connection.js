const mongoose = require('mongoose')

module.exports = _ => {
  return mongoose.connect(
    'mongodb://admin:semmi123@ds227674.mlab.com:27674/minnanotame',
    {useNewUrlParser: true}
  )
}
