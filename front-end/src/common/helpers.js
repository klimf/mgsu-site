import fetch from "isomorphic-fetch";
import {createAction} from "redux-act";


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function formatMoney(value) {
    if (value) {
        return value.toFixed().replace(/./g, function (c, i, a) {
            return (i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c);
        });
    } else {
        return;
    }
}

export function formatDate(date) {
                var d = new Date();
                d.setTime(Date.parse(date));
                 return d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear();
            };

export function formatEventDate(date) {

    let d = new Date();
    d.setTime(Date.parse(date));
    let month = [];

    month[0]="Января";
    month[1]="Февраля";
    month[2]="Марта";
    month[3]="Апреля";
    month[4]="Мая";
    month[5]="Июня";
    month[6]="Июля";
    month[7]="Августа";
    month[8]="Сентября";
    month[9]="Октября";
    month[10]="Ноября";
    month[11]="Декабря";

    return {
        day: d.getDate(),
        month: month[d.getMonth()],
        year: d.getFullYear(),
        old: d.getTime() < new Date().getTime()
    }
}

export const apiUrl = 'http://185.189.13.148:4000/api';
// export const apiUrl = 'http://localhost:4000/api';

export const resolveStatic = (path) => {
    return 'http://185.189.13.148:4000' + path;
};

export const credOptions = 'include';

export function resolveApi({path, action, query}) {
    const haveQuery = (query && query !== {});
    if (haveQuery) {
        var queryArr = [];
        for (var key in query) {
            queryArr.push(key + '=' + query[key])
        }
    }
    return apiUrl + `/${path.join('/')}${haveQuery ? ('?' + queryArr.join('&')) : ''}`

}

export class AsyncAction {

    constructor(TYPE, asyncFunc) {
        this.actions = {
            startQuery: createAction(TYPE + '_START', (params) => params),
            sucessQuery: createAction(TYPE + '_SUCESS', (data) => data),
            failQuery: createAction(TYPE + '_FAIL')
        };
        this.asyncFunc = asyncFunc;
        this.reducerHandlers = {
            [this.actions.startQuery]: (state, request) => ({
                loading: true,
                data: false,
                error: false,
                request: request
            }),
            [this.actions.sucessQuery]: (state, data) => ({loading: false, data: data, error: false}),
            [this.actions.failQuery]: (state, message) => ({loading: false, data: false, error: message})
        };
        this.defaultState = {loading: true, data: false, error: false}
    }

    perform(params) {

        this.dispatch(this.actions.startQuery(params));
        return this.asyncFunc(params).then(
            resolved => this.dispatch(this.actions.sucessQuery(resolved)))
            .catch(rejected => this.dispatch(this.actions.failQuery(rejected)))

    }

    bindTo(dispatch) {
        this.dispatch = dispatch;
        return this;
    }
}

export class ApiAction extends AsyncAction {

    constructor({TYPE, model, action = false, options = false, prePare = false}) {

        const apiFunc = ({params, query = {}, body, options}) => {

            const path = [this.model].concat(params || []);

            const _query = query ? Object.assign({}, this.options.query, query) : this.options.query;

            const apiQuery = resolveApi({path: path, action: this.action, query: _query});

            const _options = options || this.options;

            if(body) {
                 _options.body = JSON.stringify(body);
            }

            _options.headers = {
                     'Content-Type': 'application/json',
                    };
             _options.credentials = 'include';

            return new Promise((resolve, reject) => {
                fetch(apiQuery, _options).then((response) => {
                if(response.status != 200 && response.status != 304) {
                    reject({status: response.status, message: response});
                } else {
                    response.json().then((data) => {
                       resolve(this.prePare(data));
                    })
                }
            }).catch((error) => {
                   reject(error);
                })
            })

        };

        super(TYPE, apiFunc);
        this.model = model;
        this.action = action;
        this.options = options || {query: {}, method: 'GET'};

        this.prePare = prePare || ((data) => data);

    }


}


export class StateModel {

    constructor(apiAction) {
        this._apiAction = apiAction;
        this.handlers = this._apiAction.reducerHandlers;
        this.defaultState = this._apiAction.defaultState;
        this.actions = {}
    }

    bindTo(dispatch) {
        this._apiAction.bindTo(dispatch);
        this.dispatch = dispatch;
        return this;
    }

    appendAction(action, changedStateField, defaultStateFieldValue) {
        this.actions = Object.assign(this.actions, action);
        this.handlers[action] = (state, data) => {
            const newState = this.defaultState;
            newState[changedStateField] = data;
            return newState;
        }
        this.defaultState[changedStateField] = defaultStateFieldValue;
    }

}

export function setItemImage(item, small) {
    if(item.img) {
        return {
            class: '',
            style: {
                background: `url(${resolveStatic((small ? item.img.small : item.img.original ))}`
            }
        }
    } else {
    
        return {
            class:  'placeholder-img',
            style: { }
        }
    }
   
}