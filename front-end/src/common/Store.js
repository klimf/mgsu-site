import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import combinedRedusers from "./reducers/appReducers";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function initStore(initialState = {}) {
    return createStore(combinedRedusers, initialState, composeEnhancers(applyMiddleware(thunk)));
}