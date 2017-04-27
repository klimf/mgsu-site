import {createAction, createReducer} from "redux-act";

export const newsActions = {
    get: createAction('getting news'),
    getSuccess: createAction('success get'),
    getFailed: createAction('get failed')

};

export const NewsReducer = createReducer({
    [newsActions.getByDirection]: (state, payload) => payload,
    [newsActions.getSuccess]: (state, payload) => payload,
    [newsActions.getFailed]: (state, payload) => payload,
}, [])
