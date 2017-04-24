var createStore =  require("redux").createStore;
var buildApp = require( "./Render/AppBuilder");
var generateIndexPage = require("./Render/indexPageGenerator");
var redusers = require( "../front-end/src/common/appReducers");


module.exports = function(req, res, next) {

    var store = createStore(redusers);

    var context = {}

    var app = buildApp(store, req.url, context);

    res.send(generateIndexPage(app, store.getState()))
 
}