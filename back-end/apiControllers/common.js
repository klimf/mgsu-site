var multiparty = require('multiparty');
var crypto = require('crypto');
var fs = require("fs");
var im = require('imagemagick');


module.exports.saveFileByPost = saveFile;

//returns fileName
function saveFile(req, supportMimeTypes, path, maxSize, cb) {

    var form = new multiparty.Form();
    var uploadFile = {path: '', type: '', size: 0, name: ''},
        errors = [];
    console.log(req);
    form.on('error', function(err){
        if(fs.existsSync(uploadFile.path)) {
            fs.unlinkSync(uploadFile.path);
            errors.push(err);
            console.log(err);
        }
    });

    form.on('part', function(part) {

        if(part.filename) {

            console.log(part.filename);

            uploadFile.size = part.byteCount;
            uploadFile.type = part.headers['content-type'];
            uploadFile.name = crypto.createHmac('sha256', 'ach')
                    .update(part.filename)
                    .digest('hex')
                    .slice(0, 10) + '.' + uploadFile.type.split('/')[1];
            uploadFile.path = path + '/' + uploadFile.name;

            if(supportMimeTypes.indexOf(uploadFile.type) == -1) {
                errors.push('unsupported type: ' + uploadFile.type);
            }

            if(uploadFile.size > maxSize) {
                errors.push('File size is ' + uploadFile.size + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
            }

            if(errors.length == 0) {

                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }

                if(fs.existsSync(uploadFile.path)) {
                    fs.unlinkSync(uploadFile.path);
                }

                var outStream = fs.createWriteStream(uploadFile.path);
                part.pipe(outStream);

            }
            else {
                part.resume();
            }
        }
    });

    form.on('close', function() {

        if(errors.length == 0) {
            cb(null, uploadFile.name);
            console.log(uploadFile.name);
        }
        else {
            console.error(errors);
            cb(errors, null);
        }
    });

    form.parse(req);
};


module.exports.formatImage = function (path, fileName, cb) {

    var newFileName = 'resized-' + fileName;

    im.resize({
        srcPath: path + '/' + fileName,
        dstPath: path + '/' + newFileName,
        width: 500
    }, function (err) {
        if(err) cb(err);
        else cb(null, newFileName);
    })

};

module.exports.resetCache = function (req, res, next) {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
};

//mailer

var config = require('../config.js').smtp;
var nodemailer = require('nodemailer');

module.exports.sendEmail = send;

var transporter = nodemailer.createTransport(
    {
        port: config.port,
        host: config.host,
        auth: {
            user: 'endowment@misis.ru',
            pass: 'bTrjvOzoHUnT'
        }
    });

function send(params, callback) {

    var mailOptions = {
        from: config.sender,
        to: params.to,
        subject: params.subject,
        text: params.text,
        html: params.html || null
    };

    transporter.sendMail(mailOptions, function(err, info){
        callback(err, info);
    });

};



