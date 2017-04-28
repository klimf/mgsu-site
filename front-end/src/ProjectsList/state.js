import {createAction, createReducer} from "redux-act";
import {ApiAction} from "../common/helpers"


export const GetByDirection = new ApiAction({TYPE: "PROJECTS_GET_BY_DIRECTION", model: 'projects', prePare: ({docs}) => docs});

export const ProjectsListActions = {
    changeDirection: createAction('PROJECTS_CHANGE_DIRECTION', (direction) => (direction))
};

export const GetByDirectionReducer = createReducer(GetByDirection.reducerHandlers, GetByDirection.defaultState);


export const ProjectsListReducer = createReducer({
    [ProjectsListActions.changeDirection]: (state, direction) => ({direction: direction})
}, {direction: null})




