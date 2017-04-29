import { createReducer, createAction } from "redux-act";
import { ApiAction,  StateModel} from "../helpers";


class _ProjectsListManager extends StateModel {
    constructor() {
        super(new ApiAction({TYPE: 'PROJECTS_LIST_CHANGE', model: 'projects'}));
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

export const GetProjectsAsync = new ApiAction({
    TYPE: "PROGECTS_GET_BY_DIRECTION",
    model: 'projects',
    prePare: ({ docs }) => docs
});

export const ProjectsListManager = new _ProjectsListManager();

export const ProjectsListState = createReducer(ProjectsListManager.handlers, ProjectsListManager.defaultState);





