var File = require('../db/mongoose').models.File;
var config = require('../config');
var im = require('imagemagick');
var fs = require('fs');
var multiparty = require('multiparty');
var crypto = require('crypto');
var saveFile = require('./common').saveFileByPost;

module.exports = {
    uploadImg: uploadImg,
    remove: remove,
    create: create,
    uploadDoc: uploadDoc,
    getByType: getByType
};



function uploadImg(req, res, next) {

    try {


        var form = new multiparty.Form();
        var uploadFile = {path: '', type: '', size: 0, name: ''},
            errors = [];
        form.on('error', function (err) {
            if (fs.existsSync(uploadFile.path)) {
                fs.unlinkSync(uploadFile.path);
                res.send(202, err);
            }
        });

        form.on('part', function (part) {


            if (part.filename) {

                console.log(part.filename);

                uploadFile.size = part.byteCount;
                uploadFile.type = part.headers['content-type'];
                uploadFile.name = crypto.createHmac('sha256', 'ach')
                        .update(part.filename)
                        .digest('hex')
                        .slice(0, 10) + '.' + uploadFile.type.split('/')[1];
                uploadFile.path = config.img.path + '/' + uploadFile.name;

                if (config.img.supportedMimeTypes.indexOf(uploadFile.type) == -1) {
                    errors.push('unsupported type: ' + uploadFile.type);
                }

                if (uploadFile.size > config.img.maxSize) {
                    errors.push('File size is ' + uploadFile.size + '. Limit is' + (config.img.maxSize / 1024 / 1024) + 'MB.');
                }

                if (errors.length == 0) {

                    if (!fs.existsSync(config.img.path)) {
                        fs.mkdirSync(config.img.path);
                    }

                    if (fs.existsSync(uploadFile.path)) {
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


        form.on('close', function () {

            console.log('close');

            if (errors.length == 0) {
                console.log(uploadFile.name);

                var resizedFile = 'resized-' + uploadFile.name;

                im.resize({
                    srcPath: config.img.path + '/' + uploadFile.name,
                    dstPath: config.img.path + '/' + resizedFile,
                    width: 500
                }, function (err) {

                    console.error(err);

                    if (err) {
                        res.send(202, err);

                    } else {

                        var file = new File({
                            original: config.img.link + '/' + uploadFile.name,
                            small: config.img.link + '/' + resizedFile,
                            role: 'img',
                            creatingDate: new Date()
                        });

                        file.save(function (err, data) {
                            if (err) {
                                console.error(err);
                                res.send(203, err);
                            } else {
                                res.statusCode = 200;
                                res.send(data);
                            }
                        });

                    }
                });
            }
            else {
                console.error(errors);
                res.send(204, errors);
            }
        });

        form.parse(req);
    } catch (e) {
        res.send(205, e);
    }

}

function create(req, res, next) {

    var file = new File(req.body);

    file.creatingDate = new Date();

    file.save(function(err, data) {
        if(err) {
            res.statusCode = 500;
            res.send(err);
        } else {
            res.send(data);
        }
    })

}

function uploadDoc(req, res, next) {

    saveFile(req, config.doc.supportedMimeTypes, config.doc.path, config.doc.maxSize, function(err, fileName) {
        if(err) {
            res.statusCode = 500;
            res.send(err);
        } else {

            var file = new File({
                role: req.body.role,
                original: config.doc.path + '/' + fileName,
                creatingDate: new Date()
            });

            file.save(function(err, data) {
                if(err) {
                    res.statusCode = 500;
                    res.send(data);
                } else {
                    res.semd(data);
                }
            })
        }
    })

}

function remove(req, res, next) {

    File.deleteInstance(req.params.id, function(err, data) {
        if(err) {
            res.statusCode = 500;
            res.send();
        } else {
            res.send();
        }
    })
}

function getByType(req, res, next) {

    File.find({role: req.query.role, removed: false}, ['-removed'], function (err, data) {
        if(err) {
            res.statusCode = 500;
            res.send(err);
        } else if (data) {
            res.send(data);
        } else {
            res.statusCode = 404;
            res.send();
        }
    })
}