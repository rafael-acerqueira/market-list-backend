const ShoppingList = require('../models/shoppingListModel')
const Product = require('../models/productModel')

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
  ShoppingList.findById(req.params.id, async (err, shoppingList) => {
    if(err)
      res.send(err)
    const shoppingListJSON = JSON.parse(JSON.stringify(shoppingList))
    const list = []
    await Promise.all(shoppingListJSON.items.map(async element => {
      let product = await Product.findById(element.product)
      const productJSON = JSON.parse(JSON.stringify(product))
      list.push({
        product: productJSON._id,
        productName: productJSON.name,
        quantity: element.quantity,
        value: element.value,
        found: element.found
      })
    }))
    shoppingListJSON.items = list
    res.json(shoppingListJSON)
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