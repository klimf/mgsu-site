var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var file = new schema({
    role: {
        type: String
    },
    original: {
        type: String,
        required: true
    },
    small: {
        type: String
    },
    creatingDate: {
        type: Date,
        required: true
    }
});

file.statics.createInstance = commonMethods.createInstance;
file.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = file;