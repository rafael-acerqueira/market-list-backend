
const mongoose = require('mongoose')
module.exports = mongoose.connect(
  'mongodb://localhost/marketlist',
  { useNewUrlParser: true }
)