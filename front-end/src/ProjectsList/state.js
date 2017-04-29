import {createReducer} from "redux-act";
import {ApiAction} from "../common/helpers";

export const GetByDirection = new ApiAction({
    TYPE: "PROJECTS_GET_BY_DIRECTION",
    model: 'projects',
    prePare: ({docs}) => docs
});

export const GetByDirectionReducer = createReducer(GetByDirection.reducerHandlers, GetByDirection.defaultState);