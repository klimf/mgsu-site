import { createReducer, createAction } from "redux-act";
import {combineReducers} from "redux"
import { ApiAction } from "../helpers";

class UserManager {

    constructor() {

        this.loginActionAsync = new ApiAction({
            TYPE: 'USER_LOGIN',
            model: 'user',
            action: 'login',
            method: 'POST'
        });

        this.getCurrentActionAsync = new ApiAction({
            TYPE: 'USER_CURRENT',
            model: 'user',
            action: 'current',
            method: 'GET'
        });

        this.logoutActionAsync = new ApiAction({
            TYPE: 'USER_LOGOUT',
            model: 'user',
            action: 'logout',
            method: 'POST'
        });


    }

    bindTo(dispatch) {
        this.loginActionAsync =  this.loginActionAsync.bindTo(dispatch);
        this.getCurrentActionAsync =  this.getCurrentActionAsync.bindTo(dispatch);
        this.logoutActionAsync =  this.logoutActionAsync.bindTo(dispatch);
        return this;
    }

    login(email, password) {
        this.loginActionAsync.perform({
            body: {email, password}
        }).then(() => {
            this.current();
        })
    }

    current() {
        this.getCurrentActionAsync.perform()
    }

    logout() {
        this.logoutActionAsync.perform().then(() => {
            this.current();
        })
    }

    generateReducer() {
        return combineReducers({
            UserLoginAsync: createReducer(this.loginActionAsync.reducerHandlers, this.loginActionAsync.defaultState),
            UserCurrentState: createReducer(this.getCurrentActionAsync.reducerHandlers, this.getCurrentActionAsync.defaultState),
            UserLogouttAsync: createReducer(this.logoutActionAsync.reducerHandlers, this.logoutActionAsync.defaultState)
        })
    }
    
}

export const User = new UserManager;

export const UserState = User.generateReducer();
