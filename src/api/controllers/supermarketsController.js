const Supermarket = require('../models/supermarketModel')

exports.list = function(req, res) {
  Supermarket.find({}, function(err, msg) {
    if (err)
      res.send(err)
    res.json(msg)
  })
}

exports.create = function(req, res) {
  var supermarket = new Supermarket(req.body)
  supermarket.save(function(err, msg) {
  if (err)
    res.send(err)
  res.json(msg)
  })
}

exports.read = function(req, res) {
  Supermarket.findById(req.params.id, function(err, msg) {
  if (err)
    res.send(err)
  res.json(msg)
  })
}

exports.update = function(req, res) {
  Supermarket.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, msg) {
  if (err)
    res.send(err)
  res.json(msg)
  })
}

exports.delete = function(req, res) {
  Supermarket.deleteOne({
     _id: req.params.id
  }, function(err, msg) {
  if (err)
    res.send(err)
  res.json({ message: 'Supermercado removido com sucesso' })
  })
}