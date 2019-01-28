var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductCategory = new Schema({
  name: { type: String, required: true}
})

module.exports = mongoose.model('ProductCategory', ProductCategory)