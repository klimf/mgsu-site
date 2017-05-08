import {combineReducers} from "redux";

import { ProjectsState } from "./ProjectsState";
import {UserState} from "./UserState";
import {ContentState, NewsState, EventsState, NewsDetail, EventDetail} from "./ContentState";
import {PeopleState} from "./PeopleState";
import {HeaderReducer as Header} from "../components/state";



export default combineReducers({
    UserState,
    ContentState,
    NewsState,
    EventsState,
    PeopleState,
    Header,
    ProjectsState,
    NewsDetail,
    EventDetail
})
