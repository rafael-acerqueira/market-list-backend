var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Product = new Schema({
  name: { type: String, required: true, trim: true },
  productCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true
  }
})

module.exports = mongoose.model('Product', Product)