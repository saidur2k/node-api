const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const productsRouter = require('./routes/products')

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/products', productsRouter)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

module.exports = app