var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var fileSchema = require('./file');

var	schema = mongoose.Schema;

var calcOption = new schema({
     project: {
        type: schema.Types.ObjectId,
        ref: 'Project'
    },
    label1: String,
    label2: String,
    koef: Number
});



module.exports = calcOption;