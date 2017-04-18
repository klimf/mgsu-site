var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var privilege = new schema({
    value : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    recursive: {
        type: Boolean
    },
    name: {
        type: String,
        required: true
    },
    features: [
        {
            type: String
        }
    ]
});

privilege.statics.createInstance = commonMethods.createInstance;
privilege.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = privilege;