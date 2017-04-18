var User = require('../db/mongoose').models.User;
var sendConfirmationEmail = require('./mailer').sendConfirmationEmail;

module.exports = {
    login: login,
    current: current,
    logout: logout,
    update: update,
    checkPermission: {
        admin: isAdmin
    },
    create: create,
    confirmUser: confirmUser
};

function login(req, res, next) {

        User.findOne({email: req.body.email}, function(err, user) {
            if(err) {
                res.statusCode = 401;
                res.send(err);
            } else if(user) {

                if(user.role != 0 && !user.passwordIsCorrect(req.body.password)) {
                    res.statusCode = 401;
                    res.send('invalid creds');
                } else {
                    user.hashPassword = null;
                    user.salt = null;
                    req.session.user = user;
                    console.log(req.session.user);
                    res.send(req.session.user);
                }

            } else if (!user) {
                res.statusCode = 404;
                res.send('not found');
            }
        });
}

function current(req, res, next) {

    if(req.session.user) {
        res.statusCode = 200;
        res.send(req.session.user);
    } else {
        res.statusCode = 401;
        res.send();
    }

}

function logout(req, res, next) {
        req.session.user = null;
        res.send();
}

function isAdmin(req, res, next) {
    if(req.session.user && req.session.user.role == 1) {
        next();
    } else {
        res.statusCode = 401;
        res.send('permission denied');
    }
}

function update(req, res, next) {

    if(req.session.user) {
        User.findById(req.session.user._id, function(err, user) {
            if(err) {
                res.statusCode = 400;
                res.send();
            } else if (user) {
                req.session.user = user;
                res.send(user);
            } else {
                res.statusCode = 404;
                res.send();
            }
        })

    } else {
        res.statusCode = 401;
        res.send('permission denied');
    }
}

function create(req, res, next) {

    if(!req.body.email) {
        res.send(400, 'email is required')
    };

    var pass = req.body.email.split('@')[0] + Math.round(Math.random());

    User.createInstance(req.body, {role: 0, hashPassword: pass}, function(err, data) {
        if(err) {
            console.error(err);
            res.statusCode = 400;
            res.send('validation error');
        } else {
            res.send(data._id);
            var token = data.createConfirmationToken();
            data.save();
            sendConfirmationEmail(data.email, data.firstName, pass, token, function (err, data) {
                console.log(err || data);
            })
        }
    });

}

function confirmUser(req, res, next) {

        User.findOne({emailConfirmationToken: req.body.token}, function (err, data) {
            if (err) {
                res.statusCode = 404;
                res.send()
            } else {
                data.confirmed = true;
                data.save();
                res.send();
            }
        })

}