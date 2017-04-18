var Project = require('../db/mongoose').models.Project;
var saveFile = require('./common').saveFileByPost;
var config = require('../config').project;
var Donation = require('../db/mongoose').models.Donation;
var User = require('../db/mongoose').models.User;
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    create: create,
    getByDirection: getByDirection,
    get: get,
    getDetail: getDetail,
    getAll: getAll,
    remove: remove,
    donate: donate,
    update: update
};

function create(req, res, next) {

        try {
            var prjData = req.body;

            Project.createInstance(prjData, {direction: req.body.direction} ,function (err, data) {
                if (err) {
                    console.log(req.body);
                    console.error(err);
                    res.statusCode = 500;
                    res.send('validation error');
                } else {
                    res.send(data._id);
                    console.log(data);
                }
            });

        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.send();
        }

}

function getByDirection(req, res, next) {

    Project.paginate({direction: req.params.direction},
        {
            page: req.query.page,
            limit: config.paginateLimit
        })
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.statusCode = 500;
                res.send();
            } else {
                res.send(data);
            }
        })
}

function get(req, res, next) {

    try {

        var queryCriteria = req.query.direction && req.query.direction != 'null' ? {direction: req.query.direction, removed: false} : {removed: false};

        if(!req.session.user || req.session.user.role != 1) {
           
            if(!queryCriteria.direction) {
                queryCriteria.public = true;
            } else  if(req.query.public) {
                queryCriteria.public = req.query.public;
            }
        }

        var options = {
            page: Number(req.query.page) || 1,
            limit : config.paginateLimit,
            select: config.dtoParams
        };

        Project.paginate(queryCriteria, options, function(err, data) {
                if(err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.send(data);
                }
            });

    } catch (err) {
        console.error(err);
    }

}


function getDetail(req, res, next) {

    Project.findById(req.params.id)
            .select('-removed')
            .exec(
                function(err, data) {
                        if(err) {
                            console.error(err);
                            res.statusCode = 500;
                            res.end();
                        } else if (data && !data.removed){
                            res.statusCode = 200;
                            res.send(data);
                        } else {
                            res.statusCode = 404;
                            res.send();
                        }
                    })
}

function remove(req, res, next) {

    Project.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.statusCode = 500;
            res.end();
        } else {
            res.send(data);
        }
    })
}


function donate(req, res, next) {

    Project.findById(req.params.id, function(err, project) {
        if(err) {
            res.statusCode = 401;
            res.send(err);
        } else if(project) {

            var donationData = {
                value: req.body.value,
                recursive: req.body.recursive || false
            };


            User.findById(req.body.contributorId, function (err, user) {
                if(err) {
                    res.statusCode = 401;
                    res.send(err);
                } else if(user) {
                    donationData.contributorId = req.body.contributorId;
                } else {
                    res.statusCode = 404;
                    res.send();
                }
            });

            var donation = new Donation(donationData);
            project.donations.push(donation);

            project.save(function (err, data) {
                if(err) {
                    res.statusCode = 400;
                    res.send(err);
                } else {
                    res.send();
                }
            });
        } else {
            res.statusCode = 404;
            res.send();
        }
    })
}

function getAll(req, res, next) {

    Project.find({removed: false}, '-removed')
            .exec(function (err, data) {
                if(err) {
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.send(data);
                }
             })
}

function update(req, res, next) {

    Project.update({_id: req.params.id}, req.body, function(err, data) {
        if(err) {
            res.statusCode = 500;
            res.send(err);
        } else {
            res.send(data);
        }
    })

}
