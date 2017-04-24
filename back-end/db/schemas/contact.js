var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var fileSchema = require('./file');

var	schema = mongoose.Schema;

var contact = new schema({
    team: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    middleName: {
        type: String
    },
    description: {
        type: String
    },
    contacts: [{
        type: String
    }],
    img: {
        type: fileSchema
    }
});

contact.statics.createInstance = commonMethods.createInstance;
contact.statics.deleteInstance = commonMethods.deleteInstance;


module.exports = contact;