var Privilege = require('../db/mongoose').models.Privilege;
var Donation = require('../db/mongoose').models.Donation;


module.exports = {
    create: create,
    get: get,
    remove: remove,
    update: update,
    getByUser: getByUser
};

function create(req, res, next) {

    console.log(req.body);
    var features = [];
    if(req.body.fatures) {
        for(var item in req.body.fatures) {
            features[item] = req.body.fatures[item];
        }
    } else {
        features = req.body.features;
    }


    Privilege.createInstance(req.body, {features: features}, function(err, data) {
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

    Privilege.find(function (err, data) {
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

    Privilege.deleteInstance(req.params.id, function(err, data) {
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

    Privilege.update({_id: req.params.id}, req.body, function(err, data) {
        if(err) {
            res.statusCode = 400;
            res.send(err);
        } else {
            res.send(data);
        }
    })

};

function getByUser(req, res, next) {
    Donation.findOne({user: req.params.userId}, function (err, donation) {
        if(err) {
            res.statusCode = 400;
            res.send(err);
        } else {
            Privilege.find({value: {$lte: donation.value}, recursive: donation.recursive}).sort('-value').exec(function (err, data) {
                if(err) {
                    res.statusCode = 400;
                    res.send(err);
                } else {
                    res.send(data[0]);
                }
            })
        }
    })
}
