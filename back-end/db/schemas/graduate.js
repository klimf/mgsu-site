var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var graduate = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    ageOfGraduation: {
        type: Date
    },
    department: {
        type: String
    },
    specialization: {
        type: String
    },
    comment: {
        type: String
    },
    checked: {
        type: Boolean
    },
    level: {
        type: Number
    }
});

graduate.statics.createInstance = commonMethods.createInstance;
graduate.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = graduate;