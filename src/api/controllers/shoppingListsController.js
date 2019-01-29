const ShoppingList = require('../models/shoppingListModel')

exports.list = (req, res) => {
  ShoppingList.find({}, (err, shoppingList) => {
    if(err)
      res.send(err)
    res.json(shoppingList)  
  })
}

exports.create = (req, res) => {
  const shoppingList = new ShoppingList(req.body)
  shoppingList.save((err, shoppingList) => {
    if(err)
      res.send(err)
    res.json(shoppingList)
  })
}

exports.read = (req, res) => {
  ShoppingList.findById(req.params.id, (err, shoppingList) => {
    if(err)
      res.send(err)
    res.json(shoppingList)  
  })
}

exports.update = (req, res) => {
  ShoppingList.findOneAndUpdate({ 
    _id: req.params.id}, 
    req.body, 
    {new:true}, 
    (err, shoppingList) => {
      if(err)
        res.send(err)
      res.json(shoppingList)  
  })
}

exports.delete = (req, res) => {
  ShoppingList.deleteOne({ _id: req.params.id }, (err, shoppingList) => {
    if(err)
      res.send(err)
    res.json(shoppingList)  
  })
}