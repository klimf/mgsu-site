var commonMethods = require('./commonMethods.js');
var mongoose = require('mongoose');
var fileSchema = require('./file');

var	schema = mongoose.Schema;

var report = new schema({
    email: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
     projects: [{
        name: String,
        calculationResult: Number,
        option: {
            label1: String,
            label2: String,
            value1: Number,
            value2: Number,
        }
    }],
    donation: Number,
    percent: Number
});




module.exports = report;