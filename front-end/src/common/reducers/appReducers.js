
import {combineReducers} from "redux";

import {GetByDirectionReducer as ProjectsListAsync, ProjectsListReducer as ProjectsList} from "../../ProjectsList/state";
import {UserReducer as User} from "./UserState";
import {NewsReducer as News} from "../../News/state";
import {HeaderReducer as Header} from "../components/state";


export default combineReducers({
    User,
    News,
    Header,
    ProjectsListAsync,
    ProjectsList
})
