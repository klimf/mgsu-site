var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('./db/mongoose').createConnection;
var config = require("./config");


var users = require('./routes/users');
var index = require('./routes/index');

var app = express();

var mongooseConnection = mongoose();

// view engine setup


app.use(session({
  secret: config.sessionSecret,
  store: new MongoStore({mongooseConnection : mongooseConnection}),
  resave: true,
  saveUninitialized: true,
  key: 'sid',
  cookie: {maxAge: null}
}));


var auth = require('basic-auth');
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization,Cookie,X-Total-Count');    
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 res.header('X-Total-Count', '1000');   
res.header('Access-Control-Allow-Credentials', true);
	next();
})
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/file', express.static(path.join(__dirname, 'storage')));
app.use('/', index);
app.use('/api', require('./routes/api'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
