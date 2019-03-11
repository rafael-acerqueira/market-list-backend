const express = require('express')

module.exports = function (app) {

  const router = express.Router()
  app.use('/api', router)

  var supermarkets = require('../api/controllers/supermarketsController')
  router.get('/supermarkets', supermarkets.list)
  router.post('/supermarkets', supermarkets.create)
  router.get('/supermarkets/:id', supermarkets.read)
  router.put('/supermarkets/:id', supermarkets.update)
  router.delete('/supermarkets/:id', supermarkets.delete)

  var productCategories = require('../api/controllers/productCategoriesController')
  router.get('/product-categories', productCategories.list)
  router.post('/product-categories', productCategories.create)
  router.get('/product-categories/:id', productCategories.read)
  router.put('/product-categories/:id', productCategories.update)
  router.delete('/product-categories/:id', productCategories.delete)

  var products = require('../api/controllers/productsController')
  router.get('/product-categories/:categoryId/products', products.list)
  router.get('/products', products.list)
  router.post('/product-categories/:categoryId/products', products.create)
  router.get('/products/:id', products.read)
  router.get('/products/:term/search', products.search)
  router.put('/products/:id', products.update)
  router.delete('/products/:id', products.delete)

  var shoppingLists = require('../api/controllers/shoppingListsController')
  router.get('/shopping-lists', shoppingLists.list)
  router.post('/shopping-lists', shoppingLists.create)
  router.get('/shopping-lists/:id', shoppingLists.read)
  router.put('/shopping-lists/:id', shoppingLists.update)
  router.delete('/shopping-lists/:id', shoppingLists.delete)
  router.get('/shopping-lists/:month/purchase-quantity', shoppingLists.purchasesThisMonth)
}