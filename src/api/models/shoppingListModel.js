var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShoppingList = new Schema({
  date: { type: Date, required: true },
  supermarket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supermarket'
  }  
},
  { timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' }}
)

module.exports = mongoose.model('ShoppingList', ShoppingList)