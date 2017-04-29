import { createReducer, createAction } from "redux-act";
import {combineReducers} from "redux";
import { ApiAction,  StateModel} from "../helpers";


class _PeopleListModel extends StateModel {
    constructor(team) {
        super(new ApiAction({TYPE: team + '_LIST_CHANGE', model: 'contacts'}));
        this.team = team;
    }

    get() {
        this._apiAction.perform({
            query: {
                team: this.team
            }
        })
    }
}

class _SponsorsListModel extends StateModel {

    constructor() {
        super(new ApiAction({TYPE: 'SPONSORS' + '_LIST_CHANGE', model: 'donators'}));
    }

    get() {
        this._apiAction.perform()
    }
}


export const OurTeamManager = new _PeopleListModel('our-team');
export const VipSponsorsManager = new _PeopleListModel('vip-sponsors');
export const ContactsManager = new _PeopleListModel('our-contacts');
export const SponsorsListManager = new _SponsorsListModel();



export const PeopleState = combineReducers({
    OurTeam: createReducer(OurTeamManager.handlers, OurTeamManager.defaultState),
    VipSponsors: createReducer(VipSponsorsManager.handlers, VipSponsorsManager.defaultState),
    Contacts: createReducer(ContactsManager.handlers, ContactsManager.defaultState),
    SponsorsList: createReducer(SponsorsListManager.handlers, SponsorsListManager.defaultState)
}) 





