const bodyParser = require('body-parser')
const morgan = require('morgan')

module.exports = (app) => {
  app.use(morgan('dev'))
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }))
  // parse application/json
  app.use(bodyParser.json())
}