import {createReducer} from "redux-act";
import {combineReducers} from "redux";
import {ProjectsList} from "../../ProjectsList/state"
import {User} from "./UserReducer"


export default combineReducers({
    User,
    ProjectsList
})
