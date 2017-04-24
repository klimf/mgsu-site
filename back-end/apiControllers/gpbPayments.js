var Donation = require('../db/mongoose').models.Donation;
var confirmDonationById = require('./donation').confirmDonationById;
var auth = require('basic-auth');
var authCredsConfig = require('../config').ppsCreds;

module.exports = {
    checkPaymentAvail: checkPaymentAvail,
    registerPayment: registerPayment,
    ppsAuth: ppsAuth
}

function checkPaymentAvail(req, res, next) {
    var donationId = req.query['o.donation_id'];
    console.log(req.query);
    Donation.findById(donationId, function(err, data) {
        if(err) {
            res.send(JSON.stringify({
                result: {
                    code: 2,
                    desc: 'donation_id cast error'
                }
            }));
        } else if (data && data.value) {

            var resOptions = {
                 result: {
                    code: 1,
                    desc: 'donation ' + data._id,
                },
                purchase: {
                    'account-amount': {
                        amount: data.value,
                        currency: 643,
                    }
                }
            };

            if(data.recursive == true) {
                resOptions['transaction-type'] = 'CardRegister',
                resOptions['RegisterRecurrent'] = 'Y'
            }

            res.send(JSON.stringify(resOptions));
            
        } else {
             res.send(JSON.stringify({
                result : {
                    code : 2,
                    desc: 'donation with id ' + donationId + ' not found'
                }
            }));
        }
    })
}

function registerPayment(req, res, next) {
    var resultCode = req.query['result_code'];
    var okResponse = JSON.stringify({
                result: {
                    code: 1,
                    desc: 'OK'
                }
            });
    var rejectResponse = JSON.stringify({
                result: {
                    code: 2,
                    desc: 'registration failed'
                }
            });
    if (resultCode != 1 && resultCode != 0) {
        console.log(resultCode);
        res.send(okResponse);
    } else {
        var donationId = req.query['o.donation_id']
        confirmDonationById(donationId, function (err) {
            if (err) {
                res.send(rejectResponse);
            } else {
                res.send(okResponse);
            }
        })
    }

}

function ppsAuth(req, res, next) {
    var creds = auth(req);
    if(!creds || creds.name != authCredsConfig.login || creds.pass != authCredsConfig.pass) {
        res.send(401);
    } else {
        next();
    }
}