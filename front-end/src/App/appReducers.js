import {createReducer} from "redux-act";
import {User} from "./appActions";
import {combineReducers} from "redux"

const UserReducer = createReducer({
    [User.change]: (state, payload) => payload
}, null);

export default combineReducers({
    UserReducer
})
