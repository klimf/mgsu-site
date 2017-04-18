var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {

    var path = req.originalUrl.split('/');
    if(path.indexOf('api') != -1) {
        next();
        }
    else {
       res.send("MGSU ENDAWMENT");
    }
});


module.exports = router;
