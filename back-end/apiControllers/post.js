var Post = require('../db/mongoose').models.Post;
var saveFile = require('./common').saveFileByPost;
var ObjectId = require('mongoose').Types.ObjectId;
var config = require('../config').news;

module.exports = {
    create: create,
    get: get,
    getDetail: getDetail,
    remove: remove,
    update: update
};

function create(req, res, next) {

    console.log(req.body);

    Post.createInstance(req.body, {category: req.body.category}, function(err, data) {
        if(err) {
            console.error(err);
            res.statusCode = 400;
            res.send('validation error');
        } else {
            res.send(data._id);
        }
    });

};

function get(req, res, next) {

    var options = {
        page: Number(req.query.page) || 1,
        limit : 10,
        select: config.dtoParams,
        sort: {
            creatingDate: -1
        }
    };

    var query = req.query;
    console.log(req.query);
    query.removed  = false;
    query.page = null;

    Post.paginate(query, options, function(err, data) {
        if(err) {
            console.error(err);
            res.statusCode = 400;
            res.send(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });

};

function getDetail(req, res, next) {

    Post.findById(req.params.id)
        .select(config.dtoParams)
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.statusCode = 400;
                res.end();
            } else {
                res.send(data);
            }
        })

};


function remove(req, res, next) {

    Post.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 400;
            res.end();
        } else {
            res.send(data);
        }
    })
};


function update(req, res, next) {

    Post.update({_id: req.params.id}, req.body, function(err, data) {
        if(err) {
            res.statusCode = 400;
            res.send(err);
        } else {
            res.send(data);
        }
    })

};
