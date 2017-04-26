import {createReducer} from "redux-act";
import {combineReducers} from "redux";
import {ProjectsList} from "../../ProjectsList/state"
import {User} from "./UserState"


export default combineReducers({
    User,
    ProjectsList
})
