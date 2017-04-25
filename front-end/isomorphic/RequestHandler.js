import {createStore} from "redux";
import buildApp from "./Render/AppBuilder";
import generateIndexPage from "./Render/indexPageGenerator";
import redusers from "../src/common/appReducers";


export default function(req, res, next) {

    const store = createStore(redusers);

    const context = {}

    const app = buildApp(store, req.url, context);

    res.send(generateIndexPage(app, store.getState()))
 
}