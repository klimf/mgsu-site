import {createAction, createReducer} from "redux-act"


const actions = {
    getByDirection: createAction("get by direction"),
    getSuccess: createAction("starting request"),
    getFaild: createAction("request failed")
}

export const reduser = createReducer({
    [actions.getByDirection]: (state) => ({loading: true , ...state,}),
    [actions.getSuccess]: (state, result) => ({oading: false, result}),
    [actions.getFailed]: (state, message) => ({loading: false, message}),
}, []);

export const ProjectsListActions = actions;
export const ProjectsListReducer = reduser;