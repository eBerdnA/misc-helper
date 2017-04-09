var path = require('path')

var helpers = {
  timeFromUnix: require(path.join(__dirname, '/helpers/timefromunix.js')),
  playTime: require(path.join(__dirname, '/helpers/playtime.js'))
}

module.exports.register = function (Handlebars) {
  for (var name in helpers) {
    Handlebars.registerHelper(name, helpers[name])
  }
}

module.exports.helpers = helpers
