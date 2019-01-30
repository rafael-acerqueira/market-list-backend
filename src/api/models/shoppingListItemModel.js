var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShoppingListItem = new Schema({
  quantity: { type: Number, min: 1, required: true },
  value: { type: Number },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }  
})

module.exports = mongoose.model('ShoppingListItem', ShoppingListItem)