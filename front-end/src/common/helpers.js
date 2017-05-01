import fetch from "isomorphic-fetch";
import { createAction, bindAll } from "redux-act";


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

export const apiUrl = 'http://185.189.13.148/api/';

export function resolveApi({path, action, query}) {
    const haveQuery = (query && query != {});
    if (haveQuery) {
        var queryArr = [];
        for (var key in query) {
            queryArr.push(key + '=' + query[key])
        }
    }
    return apiUrl + `${path.join('/')}${haveQuery ? ('/?' +  queryArr.join('&')) : ''}`

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
            [this.actions.startQuery]: (state, request) => ({ loading: true, data: false, error: false, request: request }),
            [this.actions.sucessQuery]: (state, data) => ({ loading: false, data: data, error: false }),
            [this.actions.failQuery]: (state, message) => ({ loading: false, data: false, error: message })
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
                 _options.headers = {
                     'Content-Type': 'application/json',
                     'Authorization': 'Basic bWV0YWxsaWM6bWV0YWxsaWM='
                    };
            }

           // _options.creditionals = 'same-origin';
           

            return new Promise((resolve, reject) => {

            
                fetch(apiQuery, _options).then((response) => {
                if(response.status != 200 && response.status!= 304) {
                    reject({status: response.status, message: response.statusText});
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
