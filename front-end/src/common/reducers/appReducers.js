
import {combineReducers} from "redux";

import { ProjectsListState } from "./ProjectsListState";
import { ProjectDetailAsync  } from "../../ProjectDetail/state";
import {UserState} from "./UserState";
import {NewsReducer as News} from "../../News/state";
import {HeaderReducer as Header} from "../components/state";


export default combineReducers({
    UserState,
    News,
    Header,
    ProjectsListState,
    ProjectDetailAsync
})
