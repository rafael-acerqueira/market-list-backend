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

  var products = require('../api/controllers/productsController')

  app.route('/product-categories/:categoryId/products')
    .get(products.list)
    .post(products.create)

  app.route('/products/:id')
    .get(products.read)
    .put(products.update)
    .delete(products.delete)    
    
    
  var shoppingLists = require('../api/controllers/shoppingListsController')

  app.route('/shopping-lists')
    .get(shoppingLists.list)
    .post(shoppingLists.create)

  app.route('/shopping-lists/:id')
    .get(shoppingLists.read)
    .put(shoppingLists.update)
    .delete(shoppingLists.delete)     
}