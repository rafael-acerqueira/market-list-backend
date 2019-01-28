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
}