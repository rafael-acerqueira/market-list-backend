var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductCategory = new Schema({
  name: { type: String, required: true, trim: true}
},
  { timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' }}
)

module.exports = mongoose.model('ProductCategory', ProductCategory)