var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');

var	schema = mongoose.Schema;

var contributor = new schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: String
    },
    donationDate: {
        type: Date
    },
    value: {
        type: Number
    },
    avatar: {
        type: String
    },
    comment: {
        type: String
    }
});

contributor.statics.createInstance = commonMethods.createInstance;
contributor.statics.deleteInstance = commonMethods.deleteInstance;


module.exports = contributor;