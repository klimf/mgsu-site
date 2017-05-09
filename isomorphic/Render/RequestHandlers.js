import {initStore} from "../../src/common/Store.prod";
import buildApp from "./AppBuilder";
import generateIndex from "./indexPageGenerator";



export function prerender(req, res, next) {

    const store = initStore();

    const context = {};

    if(context.url) {

        res.redirect(301, context.url);

    } else {

        const app = buildApp(store, req.url, context);
        res.send(generateIndex(app, store.getState()));

    }

}

export function notFoundCatch(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export function handleErrors(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
};