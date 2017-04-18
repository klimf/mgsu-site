var Donation = require('../db/mongoose').models.Donation;
var config = require('../config').donation;
var User = require('../db/mongoose').models.User;
var Project = require('../db/mongoose').models.Project;
var ObjectId = require('mongoose').Types.ObjectId;
var Graduate = require('../db/mongoose').models.Graduate;

module.exports = {
    create: create,
    get: get,
    getDetail: getDetail,
    remove: remove,
    registrationAndDonate: registrationAndDonate,
    donate: donate,
    confirmDonation: confirmDonation,
    getNew: getNew,
    confirmDonationById: confirmDonationById
};


function create(req, res, next) {

    Donation.createInstance(req.body, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 500;
            res.send('validation error');
        } else {
            res.send(data._id);
        }
    });

}

function get(req, res, next) {

    var query = {};
    query.confirmed = true;

    Donation.find(query)
        .populate('user project')
        .select('-removed')
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

    var query = req.query;
    query.confirmed = false;
    Donation.find(query)
        .populate('user project')
        .select('-removed')
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

    Donation.findOne({user: req.params.id})
        .select('-removed')
        .populate('project user')
        .exec(function(err, data) {
            if(err) {
                console.error(err);
                res.status = 400;
                res.send();
            } else {
                res.send(data);
            }
        });

}


function remove(req, res, next) {

    Donation.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 500;
            res.end();
        } else {
            res.send(data);
        }
    })
}

function registrationAndDonate(req, res, next) {

    User.createInstance(req.body, {role: 0}, function(err, user) {
        if(err) {
            console.error(err);
            res.statusCode = 400;
            res.send('validation error');
        } else {

            req.body.userId = user._id;
            req.body.confirmed = true;
            donate(req, res, next);

        }
    });
}

function donate(req, res, next) {

   var postData = req.body;

   if(!(postData.projectId && postData.userId)) {
        res.statusCode = 400;
        res.send('projectId and userId is required');
   } else {

       postData.project = new ObjectId(postData.projectId);
       postData.user = new ObjectId(postData.userId);

       if(!postData.date) {
           postData.date = new Date();
       }

       var donation = new Donation(postData);

       donation.save(function (err, data) {
           if(err) {
               res.statusCode = 400;
               console.error(err);
               res.send(err);
           } else {
               res.send();
           }
       })
       
   }

}

function confirmDonation(req, res, next) {

    Donation.findById(req.params.id)
            .exec(function(err, data) {
                if(err) {
                    console.log(err);
                    res.statusCode = 400;
                    res.send();
                } else {
                    data.confirmed = true;
                    data.save(function (err) {
                        if(err) {
                            console.log(err);
                            res.send(500, err);
                        } else {
                            updateProject(data.project, data.value, function (err) {
                                if(err) res.send(400 , err);
                                else res.send();
                            })
                        }
                    })
                }
            })
}

function confirmDonationById(id, cb) {

            Donation.findById(id)
            .exec(function(err, data) {
                if(err) {
                    console.log(err);
                    cb(err);
                } else {
                    data.confirmed = true;
                    data.save(function (err) {
                        if(err) {
                            console.log(err);
                            cb(err);
                        } else {
                            updateProject(data.project, data.value, function (err) {
                                if(err) cb(err);
                                else cb(null);
                            })
                        }
                    })
                }
            })
}


function updateProject(projectId, value,cb) {

    var targetProjectUpdate = new Promise(function(resolve, reject) {

        Project.findById(projectId, function (err, data) {
            if(err) reject('not found');
            else {
                data.given += value;
                data.save(function(err) {
                    if(err) reject(err);
                    else resolve();
                })
            }
        })

    });

    targetProjectUpdate.then(function() {

        Project.findOne({direction: 'fund'}, function(err, data) {
            if(err) cb(err);
            else {
                if(data._id != projectId) {
                    data.given += value;
                    data.save(function(err) {
                        if(err) cb(err);
                        else cb();
                    })
                } else {
                    cb();
                }

            }
        })

    }, rejected);

}

function rejected(err) {
    console.error(err);
    res.send(400 ,err);
}



