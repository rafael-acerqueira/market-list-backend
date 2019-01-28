const ProductCategory = require('../models/productCategoryModel')

exports.list = (req, res) => {
  ProductCategory.find({}, (err, productCategory) => {
    if(err)
      res.send(err)
    res.json(productCategory)  
  })
}

exports.create = (req, res) => {
  const productCategory = new ProductCategory(req.body)
  productCategory.save((err, productCategory) => {
    if(err)
      res.send(err)
    res.json(productCategory)
  })
}

exports.read = (req, res) => {
  ProductCategory.findById(req.params.id, (err, productCategory) => {
    if(err)
      res.send(err)
    res.json(productCategory)  
  })
}

exports.update = (req, res) => {
  ProductCategory.findOneAndUpdate({ 
    _id: req.params.id}, 
    req.body, 
    {new:true}, 
    (err, productCategory) => {
      if(err)
        res.send(err)
      res.json(productCategory)  
  })
}

exports.delete = (req, res) => {
  ProductCategory.deleteOne({ _id: req.params.id }, (err, productCategory) => {
    if(err)
      res.send(err)
    res.json(productCategory)  
  })
}