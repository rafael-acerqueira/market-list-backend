
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 
'mongodb://localhost/marketlist'
module.exports = mongoose.connect(url, { useNewUrlParser: true }
)