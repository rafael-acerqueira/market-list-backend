var mongoose = require('mongoose')
var Schema = mongoose.Schema

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true }
})

module.exports = mongoose.model('User', User)