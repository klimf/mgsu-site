var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var fileSchema = require('./file');

var	schema = mongoose.Schema;

var user = new schema({
    role: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    salt: {
        type: String
    },
    hashPassword: {
        type: String,
        set: commonMethods.setPassword
    },
    creatingDate: {
        type: Date
    },
    phone: {
        type: String
    },
    img: fileSchema,
    confirmed: {
        type: Boolean,
        default: false
    },
    emailConfirmationToken: {
        type: String
    }
});

user.methods.encryptData = commonMethods.encryptData;

user.methods.makeSalt = commonMethods.makeSalt;

user.methods.passwordIsCorrect = commonMethods.passwordIsCorrect;
user.methods.createConfirmationToken = commonMethods.createConfirmationToken;

user.statics.createInstance = commonMethods.createInstance;

user.statics.deleteInstance = commonMethods.deleteInstance;


module.exports = user;