var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SupermarketSchema = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model('Supermarket', SupermarketSchema)