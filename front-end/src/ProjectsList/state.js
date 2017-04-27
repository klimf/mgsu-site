import {createAction, createReducer} from "redux-act"


export const requestActions = {
    reqStart: createAction(),
    reqSuccess: createAction("starting request"),
    reqFaild: createAction("PROJECTS_GET_FAILED")
}

export const requestReduser = createReducer({
    [actions.getByDirection]: (state) => ({loading: true, data: [], message: ''}),
    [actions.getSuccess]: (state, result) => ({loading: false, data: result}),
    [actions.getFailed]: (state, message) => ({loading: false, message: message}),
}, {loading: false, data: [], message: ''});

export const ProjectsListActions = actions;
export const ProjectsListReducer = reduser;
