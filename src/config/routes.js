module.exports = function (app) {

  var supermarkets = require('../api/controllers/supermarketsController')

  app.route('/supermarkets')
    .get(supermarkets.list)
    .post(supermarkets.create)

  app.route('/supermarkets/:id')
    .get(supermarkets.read)
    .put(supermarkets.update)
    .delete(supermarkets.delete)

  var productCategories = require('../api/controllers/productCategoriesController')

  app.route('/product-categories')
    .get(productCategories.list)
    .post(productCategories.create)

  app.route('/product-categories/:id')
    .get(productCategories.read)
    .put(productCategories.update)
    .delete(productCategories.delete) 

  var product = require('../api/controllers/productsController')

  app.route('/product-categories/:categoryId/products')
    .get(product.list)
    .post(product.create)

  app.route('/products/:id')
    .get(product.read)
    .put(product.update)
    .delete(product.delete)        
}