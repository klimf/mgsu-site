import { createReducer, createAction } from "redux-act";
import {combineReducers} from "redux";
import { ApiAction,  StateModel} from "../helpers";


class _PostsListModel extends StateModel {
    constructor(category) {
        super(new ApiAction({TYPE: category + '_LIST_CHANGE', model: 'posts', prePare: ({ docs }) => docs}));
        this.category = category;
    }

    get() {
        this._apiAction.perform({
            query: {
                category: this.category
            }
        })
    }

}

export const NewsManager = new _PostsListModel('news');
export const EventsManager = new _PostsListModel('events');
export const AboutContentManager = new _PostsListModel('about-content')


export const NewsState = createReducer(NewsManager.handlers, NewsManager.defaultState);
export const EventsState = createReducer(EventsManager.handlers, EventsManager.defaultState);

export const ContentState = combineReducers({
    About: createReducer(AboutContentManager.handlers, AboutContentManager.defaultState)
}) 





