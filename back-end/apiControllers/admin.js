var User = require('../db/mongoose').models.User;
var Admin = require('../db/mongoose').models.Admin;
var config = require('../config').admin;

module.exports = {
    create: create,
    getDetail: getDetail,
    remove: remove
};

function create(req, res, next) {

    if(req.query.token == 'jumbul1488') {
        User.createInstance(req.body, {role: 1, hashPassword: req.body.password}, function(err, data) {
            if(err) {
                console.error(err);
                res.statusCode = 400;
                res.send(err);
            } else {
                res.send(data._id);
            }
        });
    } else {
        res.send(400, 'go away');
    }



}

function getDetail(req, res, next) {

    Admin.findById(req.params.id)
        .select(config.dtoParams)
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.status = 500;
                res.end();
            } else if(data && !data.removed) {
                res.send(data);
            } else {
                res.statusCode = 404;
                res.send();
            }
        })
}

function remove(req, res, next) {

    Admin.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 500;
            res.end();
        } else {
            res.send(data);
        }
    })
}


