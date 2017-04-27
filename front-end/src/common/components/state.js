import {createAction, createReducer} from "redux-act";

export const headerActions = {
    dyeWhite: createAction('HEADER_DYE_WHITE'),
    dyePrimary: createAction('HEADER_DYE_PRIMARY')
};

export const HeaderReducer = createReducer({
    [headerActions.dyeWhite]: (state) => ({white: true}),
    [headerActions.dyePrimary]: (state) => ({white: false})
}, { white: false });