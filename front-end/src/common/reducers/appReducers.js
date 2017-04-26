import {createReducer} from "redux-act";
import {combineReducers} from "redux";
import {ProjectsListReducer} from "../../ProjectsList/state";
import {UserReducer} from "./UserState";
import {NewsReducer} from "../../News/state"


export default combineReducers({
    UserReducer,
    ProjectsListReducer,
    NewsReducer
})
