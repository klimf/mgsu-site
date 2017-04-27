
import {combineReducers} from "redux";

import {ProjectsListReducer as ProjectsList} from "../../ProjectsList/state";
import {UserReducer as User} from "./UserState";
import {NewsReducer as News} from "../../News/state";
import {HeaderReducer as Header} from "../components/state";


export default combineReducers({
    User,
    ProjectsList,
    News,
    Header
})
