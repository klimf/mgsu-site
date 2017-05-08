import {createReducer} from "redux-act";
import {combineReducers} from "redux";
import {ApiAction, StateModel} from "../helpers";


class _PostsListModel extends StateModel {
    constructor(category) {
        super(new ApiAction({TYPE: category + '_LIST_CHANGE', model: 'posts', prePare: ({docs}) => docs}));
        this.category = category;
    }

    get(query) {
        const _query = query || {};
        _query.category = this.category;
        this._apiAction.perform({
            query: _query
        })
    }

     getDetail(id) {
        const _query = {};
        _query.category = this.category;
        this._apiAction.perform({
            params: [id],
            query: _query
        })
    }

}

class _PostsDetailModel extends StateModel {
    constructor(category) {
        super(new ApiAction({TYPE: category + 'CHANGE', model: 'posts'}));
        this.category = category;
    }

     getDetail(id) {
        const _query = {};
        _query.category = this.category;
        if(!id) {
            throw new Error('id is required')
        } else {
                this._apiAction.perform({
                params: [id]
            })
        }
    }

}

export const NewsManager = new _PostsListModel('news');
export const NewsDetailManager = new _PostsDetailModel('news');
export const EventsDetailManager = new _PostsDetailModel('events');
export const EventsManager = new _PostsListModel('events');
export const AboutContentManager = new _PostsListModel('about-content');
export const PartnersManager = new _PostsListModel('partners');
export const GradClubManager = new _PostsListModel('alumni');


export const NewsState = createReducer(NewsManager.handlers, NewsManager.defaultState);
export const EventsState = createReducer(EventsManager.handlers, EventsManager.defaultState);

export const EventDetail = createReducer(EventsDetailManager.handlers, EventsDetailManager.defaultState);
export const NewsDetail = createReducer(NewsDetailManager.handlers, NewsDetailManager.defaultState);

export const ContentState = combineReducers({
    About: createReducer(AboutContentManager.handlers, AboutContentManager.defaultState),
    Partners: createReducer(PartnersManager.handlers, PartnersManager.defaultState),
    GradClub: createReducer(GradClubManager.handlers, GradClubManager.defaultState)
});





