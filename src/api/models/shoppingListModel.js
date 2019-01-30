var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShoppingListItem = require('../models/shoppingListItemModel')

var ShoppingList = new Schema({
  date: { type: Date, required: true },
  supermarket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supermarket'
  },
  items: [ShoppingListItem.schema]
},
  { timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' }}
)

module.exports = mongoose.model('ShoppingList', ShoppingList)