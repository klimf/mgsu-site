import {createAction, createReducer} from "redux-act";


export const UserActions = {
    update: createAction("update user data"),
    login: createAction("login user"),
    logout: createAction("logout user"), 
}

export const User = createReducer({
    [UserActions.change]: (state, payload) => payload
}, null);


