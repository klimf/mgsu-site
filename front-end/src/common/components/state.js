import {createAction, createReducer} from "redux-act";

export const headerActions = {
    dyeWhite: createAction('HEADER_DYE_WHITE')
};

export const HeaderReducer = createReducer({
    [headerActions.dyeWhite]: (state) => ({white: true})
}, { white: false});