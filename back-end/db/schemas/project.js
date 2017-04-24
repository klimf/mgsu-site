var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var fileSchema = require('./file');

var	schema = mongoose.Schema;

var project = new schema({
    shortDescription: {
        type: String
    },
    content: {
        type: String
    },
    creatingDate: {
        type: String,
        required: true
    },
    img: {
        type: fileSchema
    },
    given: {
        type: Number
    },
    need: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    direction: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        default: true
    }
});

project.plugin(mongoosePaginate);

project.statics.createInstance = commonMethods.createInstance;
project.statics.deleteInstance = commonMethods.deleteInstance;

module.exports = project;
