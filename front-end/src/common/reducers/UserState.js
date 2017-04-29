import { createReducer, createAction } from "redux-act";
import {combineReducers} from "redux"
import { ApiAction } from "../helpers";

export class UserManager {

    constructor() {
        this._apiAction =  new ApiAction({TYPE: 'USER_CHANGE', model: 'user'});
    }
    
    login(email, password) {
        this._apiAction.perform({
            action: 'login',
            options: {
                method: 'POST'
            },
            body: {email, password}
        });
    }

    logout() {
         this._apiAction.perform({
            action: 'logout',
            options: {
                method: 'POST'
            },
        });
    }

     getCurrent() {
         console.log(this._apiAction);
         this._apiAction.perform({
            params: ['current'],
            options: {
                method: 'GET'
            },
        });
    }

    registration(userData) {
        this._apiAction.perform({
            options: {
                method: 'POST'
            },
            body: userData
        });
    }

    bindTo(dispatch) {
        this._apiAction =  this._apiAction.bindTo(dispatch);
        return this;
    }

}

export const User = new UserManager();


export const UserState = createReducer(User._apiAction.reducerHandlers, User._apiAction.defaultState);
