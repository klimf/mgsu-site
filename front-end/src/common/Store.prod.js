import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combinedRedusers from "./reducers/appReducers";


export function initStore(initialState = {}) {
    return createStore(combinedRedusers, initialState, applyMiddleware(thunk));
}
