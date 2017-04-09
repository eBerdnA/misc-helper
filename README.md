# Introduction

Just a little library which provides some for express-handlebars.

# Usage

    var exphbs = require('express-handlebars');
    var misc_helper = require('misc-helper');
    var hbs = exphbs.create({})
    misc_helper.register(hbs.handlebars);

# Available functions

  * timeFromUnix - formats a given unix timestamp in the format `dd.MM.YYYY HH:mm:ss`
  * playTime - converts a given value (in seconds) into the format `HH:mm`
