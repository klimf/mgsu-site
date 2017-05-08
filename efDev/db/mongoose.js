var mongoose = require('mongoose');
var	config = require('../config').db;
var commonProps = require('../config').db.commonProps;
var paginate = require('mongoose-paginate');
var process = require('process');

var schemas = {
	File: require('./schemas/file'),
	Admin: require('./schemas/admin'),
	Contributor: require('./schemas/contributor'),
	Contact: require('./schemas/contact'),
	Donation: require('./schemas/donation'),
	Graduate: require('./schemas/graduate'),
	Post: require('./schemas/post'),
	Privilege: require('./schemas/privilege'),
	Project: require('./schemas/project'),
	User: require('./schemas/user'),
	Calculation: require('./schemas/calculation'),
	CalcOption: require('./schemas/calcOption')
};

module.exports = {
	createConnection: createConnection,
	models: createModels()
};


function createConnection() {

	mongoose.Promise = global.Promise;
	mongoose.connect(config.string);

	var db = mongoose.connection;

	db.on('error', function (err) {
		console.log(config.string);
		
	    console.log('connection error:', err.message);
	});

	db.once('open', function callback () {
	    console.log("Connected to DB!");
	});

	db.on('disconnect', () => {
		mongoose.connect(config.string);

		db = mongoose.connection;
	})

	return db;
}

function createModels() {
	var models = {};

	schemas = addCommonProps(schemas);

	for(var item in schemas) {
		models[item] = mongoose.model(item + '', schemas[item])
	}


return models;

function addCommonProps(schemas) {

	for(var item in schemas) {
		if(schemas.hasOwnProperty(item)) {
			schemas[item].add(commonProps);
			schemas[item].plugin(paginate)
		}
	}
	return schemas;
}

}

