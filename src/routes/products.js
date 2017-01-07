var productRouter = require('express').Router()
var products = require('../service/productService')

let stockcode = ''

productRouter.get('/', function (req, res) {
  res.json(products.getAll())
})


productRouter.param('name', function(req, res, next, name) {
  var product = products.getByName(name)

  if (product) {
    req.product = product
    next()
  } else {
    res.send()
  }
})

productRouter.get('/:name', function (req, res) {
  let product = req.product
  res.json(product || {})
})

module.exports = productRouter