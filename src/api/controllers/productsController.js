const Product = require('../models/productModel')

exports.list = (req, res) => {
  const params = req.params.categoryId ? { productCategory: req.params.categoryId } : {}
  Product.find(params, (err, product) => {
    if(err)
      res.send(err)
    res.json(product)  
  })
}

exports.create = (req, res) => {  
  const product = new Product({...req.body, productCategory: req.params.categoryId})
  product.save((err, product) => {
    if(err)
      res.send(err)
    res.json(product)
  })
}

exports.read = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if(err)
      res.send(err)
    res.json(product)  
  })
}

exports.update = (req, res) => {
  Product.findOneAndUpdate({ 
    _id: req.params.id}, 
    req.body, 
    {new:true}, 
    (err, product) => {
      if(err)
        res.send(err)
      res.json(product)  
  })
}

exports.delete = (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err, product) => {
    if(err)
      res.send(err)
    res.json(product)  
  })
}

exports.search = (req, res) => {
  const regex = new RegExp(req.params.term, "i")
  Product.find({ name: regex }, (err, product) => {
    if(err)
      res.send(err)
    res.json(product)  
  })
}