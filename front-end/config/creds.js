var auth = require('basic-auth');
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization,Cookie,X-Total-Count');
    res.header('Access-Control-Allow-Creditionals', 'true');
    res.header('X-Total-Count', '1000')
    next();
})
