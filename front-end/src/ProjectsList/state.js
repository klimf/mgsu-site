import { createReducer } from "redux-act";
import { ApiAction } from "../common/helpers";

export const GetProjectsAsync = new ApiAction({
    TYPE: "PROGECTS_GET_BY_DIRECTION",
    model: 'projects',
    prePare: ({ docs }) => docs
});

export const ProjectsAsync = createReducer(GetProjectsAsync.reducerHandlers, GetProjectsAsync.defaultState);





