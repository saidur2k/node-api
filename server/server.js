const express = require('express')
const app = express()
const apiRouter = require('./api/router')
const appMiddleWareSetup = require('./middleware/appMiddleWare')
const errorHandler = require('./middleware/errorHandler')
// Setup the app middleware
appMiddleWareSetup(app)

// Setup the API
app.use('/api/', apiRouter)

// Setup the global error handling
app.use(errorHandler)

module.exports = app