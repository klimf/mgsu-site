var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var	schema = mongoose.Schema;

var donation = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: schema.Types.ObjectId,
        ref: 'Project'
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    },
    recursive: {
        type: Boolean,
        default: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

donation.plugin(mongoosePaginate);

donation.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = donation;