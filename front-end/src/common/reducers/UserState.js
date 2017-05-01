import { createReducer } from "redux-act";
import { ApiAction, StateModel } from "../helpers";

class UserManager extends StateModel {

    constructor() {
        super(new ApiAction({TYPE: 'USER_CHANGE', model: 'user'}));
    }
    
    login(email, password) {
       return this._apiAction.perform({
            params: ['login'],
            options: {
                method: 'POST'
            },
            body: {email, password}
        });
    }

    logout() {
        return this._apiAction.perform({
            params: ['logout'],
            options: {
                method: 'POST'
            },
        });
    }

     getCurrent() {
        return this._apiAction.perform({
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

}

export const User = new UserManager();


export const UserState = createReducer(User._apiAction.reducerHandlers, User._apiAction.defaultState);