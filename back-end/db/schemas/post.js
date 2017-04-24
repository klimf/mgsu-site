var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var fileSchema = require('./file');
var mongoosePaginate = require('mongoose-paginate');

var	schema = mongoose.Schema;

var post = new schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    creatingDate: {
        type: Date,
    },
    img: {
        type: fileSchema
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    link: {
        type: String
    },
    time: {
        type: String
    }
});

post.plugin(mongoosePaginate);

post.statics.createInstance = commonMethods.createInstance;
post.statics.deleteInstance = commonMethods.deleteInstance;


module.exports = post;