var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var receiver = new schema({
    groupName: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});