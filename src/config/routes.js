module.exports = function (app) {

  var supermarkets = require('../api/controllers/supermarketsController')

  app.route('/supermarkets')
    .get(supermarkets.list)
    .post(supermarkets.create)

  app.route('/supermarkets/:id')
    .get(supermarkets.read)
    .put(supermarkets.update)
    .delete(supermarkets.delete)
}