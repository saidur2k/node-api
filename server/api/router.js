var router = require('express').Router()

var productRouter = require('./product/router')

router.use('/products', productRouter)

module.exports = router