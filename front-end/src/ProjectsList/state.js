import {createAction, createReducer} from "redux-act"

export const projectsListActions = {
    getByDirection: createAction("get by direction"),
    successGet: createAction("starting request"),
    failedGet: createAction("request failed", (code, data) => {code, data})
}

export const ProjectsList = createReducer({
    [projectsListActions.getByDirection]: (state, payload) => payload,
    [projectsListActions.successGet]: (state, payload) => payload,
    [projectsListActions.failedGet]: (state, payload) => payload,
}, [])