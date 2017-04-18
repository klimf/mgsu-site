var Contact = require('../db/mongoose').models.Contact;
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    create: create,
    get: get,
    remove: remove,
    update: update
};


function create(req, res, next) {

        var contactData = req.body;

        Contact.createInstance(contactData, {team: req.body.team, contacts: req.body.contact ? req.body.contact.split(' ') : []}, function (err, data) {
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
}


function get(req, res, next) {

    if(!req.query.team) {
        res.statusCode = 400;
    } else {

        Contact.find({team: req.query.team, removed: false})
            .select('-removed')
            .exec(function(err, data) {
                if(err) {
                    res.statusCode = 500;
                    res.send(err);
                } else if(data) {
                    res.send(data);
                } else {
                    res.statusCode = 404;
                    res.send();
                }
        })
    }
}


function remove(req, res, next) {

    Contact.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            console.error(err);
            res.status = 400;
            res.end();
        } else {
            res.send(data);
        }
    })
}

function update(req, res, next) {
    Contact.update({_id: req.params.id}, req.body, function(err, data) {
        if(err) {
            res.statusCode = 400;
            res.send(err);
        } else {
            res.send(data);
        }
    })
}

