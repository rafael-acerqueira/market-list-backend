const Supermarket = require('../models/supermarketModel')

exports.list = (req, res) => {
  Supermarket.find({}, (err, supermarket) => {
    if (err)
      res.send(err)
    res.json(supermarket)
  })
}

exports.create = (req, res) => {
  var supermarket = new Supermarket(req.body)
  supermarket.save((err, supermarket) => {
  if (err)
    res.send(err)
  res.json(supermarket)
  })
}

exports.read = (req, res) => {
  Supermarket.findById(req.params.id, (err, supermarket) => {
  if (err)
    res.send(err)
  res.json(supermarket)
  })
}

exports.update = (req, res) => {
  Supermarket.findOneAndUpdate({
    _id: req.params.id}, 
    req.body, 
    {new: true}, 
    (err, supermarket) => {
      if (err)
        res.send(err)
      res.json(supermarket)
  })
}

exports.delete = (req, res) => {
  Supermarket.deleteOne({
     _id: req.params.id
  }, (err, supermarket) => {
  if (err)
    res.send(err)
  res.json(supermarket)
  })
}