import {createAction, createReducer} from "redux-act";
import {ApiAction} from "../common/helpers"


const actions = {
    getByDirection: createAction("get by direction"),
    getSuccess: createAction("starting request"),
    getFaild: createAction("request failed")
};


export const GetByDirectionReducer = createReducer(GetByDirection.reducerHandlers, GetByDirection.defaultState);





