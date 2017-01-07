var config = require('./server/config/config')
var app = require('./server/server')
var logger = require('./server/util/logger')

app.listen(config.port, function () {
  logger.log('App listening on port ' + config.port)
})
