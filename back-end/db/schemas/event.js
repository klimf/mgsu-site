var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var event = new schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creatingDate: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

event.statics.createInstance = commonMethods.createInstance;
event.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = event;