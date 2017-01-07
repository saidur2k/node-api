const router = require('express').Router()
const logger = require('../../util/logger')

const productService = require('./service/productService')

router.get('/', function (req, res) {
  res.json(productService.getAll())
})


router.param('name', function(req, res, next, name) {
  var product = productService.getByName(name)
  if (product) {
    req.product = product
    next()
  } else {
    res.send()
  }
})

router.get('/:name', function (req, res) {
  let product = req.product
  res.json(product || {})
})

module.exports = router