import { createReducer } from "redux-act";
import { ApiAction } from "../common/helpers";

export const GetProjectDetailAsync = new ApiAction({
    TYPE: "PROGECTS_GET_DETAIL",
    model: 'projects',
});

export const ProjectDetailAsync = createReducer(GetProjectDetailAsync.reducerHandlers, GetProjectDetailAsync.defaultState);
