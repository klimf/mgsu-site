var	crypto = require('crypto');
var config = require('../../config');
var mongoose = require('mongoose');
var schema = require('mongoose').Schema;

module.exports.encryptData = function(str) {
	try {
        var hash = crypto.createHmac('sha256', this.salt)
            .update(str)
            .digest('hex');
        return hash;
	} catch (err) {
		console.log(err);
	}

};

module.exports.makeSalt = function() {
	this.salt =  Math.random() + 'jambul' + Math.random();
};

module.exports.passwordIsCorrect = function(pass) {
	return (this.hashPassword == this.encryptData(pass)) || this.hashPassword == pass;
};

module.exports.setPassword = function(password) {
      this.makeSalt();
      return this.encryptData(password);
};

module.exports.createRecoveryToken = function() {
	var token = this.encryptData(this.email + new Date().getDay()).slice(10, 30);
	this.recoveryToken = token;
	return token;
};

module.exports.useRecoveryToken = function() {
		this.recoveryToken = '';
};

module.exports.createConfirmationToken = function() {
	var token = this.encryptData('jambul' + this._id);
	this.emailConfirmationToken = token;
	return token;
};

module.exports.sendConfirmationEmail = function(callback) {
	if(!this.emailConfirmationToken) this.createConfirmationToken();
	var token = this.emailConfirmationToken;
	var link = config.BASE_URL + '/confirmation/' + token;
	mailer.send(
		{
			receiver: this.email, 
			subject: 'Регистрация на Achievements MISiS', 
			text: 'Для завершения регистрации перейдите по ссылке: ' + link
		}, function(err, data) {
				console.log(link);
				if(callback) callback(err, data);
			})
};

module.exports.reCreateNewDocument = function() {
	this._id = mongoose.Types.ObjectId();
	this.isNew = true;
};

module.exports.createInstance = function(data, options, cb) {

		// for(var prop in data) {
		// 	if(this.schema.Schema.paths[prop] && this.schema.Schema.paths[prop] instanceof mongoose.Types.ObjectId) {
		// 		data[prop] = mongoose.Types.ObjectId(data[prop]);
		// 	}
		// }

		var item = new this(data);
		item.creatingDate = new Date();
		if(options) {
			for(var prop in options) {
				item[prop] = options[prop];
			}
			item.save(cb);
		}
};

module.exports.deleteInstance = function(id, cb) {
	this.update({_id: id}, {removed: true}, {}, cb)
};
