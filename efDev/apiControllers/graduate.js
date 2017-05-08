var Graduate = require('../db/mongoose').models.Graduate;
var Donation = require('../db/mongoose').models.Donation;
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    create: create,
    get: get,
    getDetail: getDetail,
    remove: remove,
    getNew: getNew,
    confirm: confirm,
    getCount: getCount
};

function create(req, res, next) {

    req.body.userId = new ObjectId(req.params.userId);
    Graduate.createInstance(req.body, null, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 400;
            res.send('validation error');
        } else {
            res.send();
        }
    });


}

function get(req, res, next) {

    Graduate.paginate({confirmed: true},
        {
            page: req.query.page,
            limit: config.paginateLimit
        })
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.status = 500;
                res.end();
            } else {
                res.send(data);
            }
        })
}

function getNew(req, res, next) {

    Graduate.paginate({confirmed: false},
        {
            page: req.query.page,
            limit: config.paginateLimit
        })
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.status = 500;
                res.end();
            } else {
                res.send(data);
            }
        })
}

function getDetail(req, res, next) {

    Graduate.findOne({user: req.params.id})
        .populate('user')
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.status = 500;
                res.end();
            } else {
                res.send(data);
            }
        })
}

function remove(req, res, next) {

    Graduate.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 500;
            res.end();
        } else {
            res.send(data);
        }
    })
}


function getCount(req, res, next) {
    Graduate.find({confirmed: true}, function (err, data) {
        if(err) {
            res.send(500, 'graduates find error')
        } else {
            res.send(data.length);
        }
    })
}

function confirm(req, res, next) {

    Graduate.findByIdAndUpdate(req.params.id, {
        $set: {confirmed: true}
    }).exec(function (err, data) {
        if(err) {
            res.send(400, err);
        } else {
            res.send();
        }
    })

}


