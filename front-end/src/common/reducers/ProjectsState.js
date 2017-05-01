import { createReducer, createAction } from "redux-act";
import { ApiAction,  StateModel} from "../helpers";
import {combineReducers} from "redux";


class _ProjectsListManager extends StateModel {
    constructor() {
        super(new ApiAction({TYPE: 'PROJECTS_LIST_CHANGE', model: 'projects', prePare: ({ docs }) => docs}));
        this.appendAction({changeDirection: createAction('CHANGE_DIRECTION')}, 'direction', null);
    }

    getByDirection(direction) {
        this._apiAction.perform({
            query: {
                direction: direction
            }
        })
    }

    changeDirection(direction) {
        this.dispatch(this.actions.changeDirection(direction));
        this.getByDirection(direction);
    }

}

class _ProjectDetailManager extends StateModel {
    constructor() {
        super(new ApiAction({TYPE: 'CURRENT_PROJECT_CHANGE', model: 'projects'}));
    }

    getDetail(id) {
       this._apiAction.perform({
            params: [id]
        })
    }

}

class _FundDetailManager extends StateModel {
    constructor() {
        super(new ApiAction({TYPE: 'FUND_DETAIL_CHANGE', model: 'projects'}));
    }

    getDetail() {
        this._apiAction.perform({
            query: {
                direction: 'fund'
            }
        })
    }

}

export const ProjectsListManager = new _ProjectsListManager();
export const ProjectDetailManager = new _ProjectDetailManager();
export const FundDetailManager = new _FundDetailManager();


export const ProjectsState = combineReducers({
    list: createReducer(ProjectsListManager.handlers, ProjectsListManager.defaultState),
    currentProject: createReducer(ProjectDetailManager.handlers, ProjectDetailManager.defaultState),
    fundDetail: createReducer(FundDetailManager.handlers, FundDetailManager.defaultState)
})





