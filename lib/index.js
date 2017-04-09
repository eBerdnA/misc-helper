var helpers = {
    timeFromUnix: require(__dirname +'/helpers/timefromunix.js'),
    playTime: require(__dirname + '/helpers/playtime.js')
}

module.exports.register = function( Handlebars ){
	for( var name in helpers ){
		Handlebars.registerHelper( name, helpers[name] );
	}
};

module.exports.helpers = helpers;