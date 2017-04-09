var assert = require('assert');

var Handlebars = require('express-handlebars');
var misc_helper = require(__dirname + '/../index.js');

var hbs = Handlebars.create({});
// console.log(hbs);
misc_helper.register( hbs.handlebars );

describe('playTime', function() {
    var tpl = hbs.handlebars.compile('{{playTime 72}}');
    it('should return 01:12 for a value of 72', function() {
      assert.equal(tpl(), "01:12");
    });

    var tpl2 = hbs.handlebars.compile('{{playTime 636}}');
    it('should return 10:36 for a value of 636', function() {
      assert.equal(tpl2(), "10:36");
    });
});
describe( 'timeFromUnix helper', function(){
	
	var tpl = hbs.handlebars.compile('{{timeFromUnix null}}');
    it('should return "---" when null value is provided', function() {
	    assert.equal( tpl(), '---');
    })

    var tpl2 = hbs.handlebars.compile('{{timeFromUnix 1491773183}}');
    it('should return "09.04.2017 23:26:23" when 1491773183 is provided', function() {
	    assert.equal( tpl2(), '09.04.2017 23:26:23');
    })

    var tpl3 = hbs.handlebars.compile('{{timeFromUnix 1491584400}}');
    it('should return "07.04.2017 19:00:00" when 1491584400 is provided', function() {
	    assert.equal( tpl3(), '07.04.2017 19:00:00');
    })

    
});