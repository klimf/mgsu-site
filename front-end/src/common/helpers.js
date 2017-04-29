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

export const apiUrl = 'http://185.189.13.148/api/';

export function resolveApi({path, action, query}) {

    if (query) {
        var queryArr = [];


        for (var key in query) {
            queryArr.push(key + '=' + query[key])
        }
    }


    return apiUrl + `${path.join('/')}${action ? '/' + action : ''}${query && '/?' + queryArr.join('&&')}`

}


export class AsyncAction {

    constructor(TYPE, asyncFunc) {

        this.actions = {
            startQuery: createAction(TYPE + '_START', (params) => params),
            sucessQuery: createAction(TYPE + '_SUCESS', (data) => data),
            failQuery: createAction(TYPE + '_FAIL', (data) => data)
        }

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
        this.asyncFunc(params).then(
            resolved => this.dispatch(this.actions.sucessQuery(resolved)),
            rejected => this.dispatch(this.actions.failQuery(rejected)))
    }

    bindTo(dispatch) {
        this.dispatch = dispatch;
        return this;
    }
}

export class ApiAction extends AsyncAction {

    constructor({TYPE, model, action, options, prePare}) {

        const apiFunc = ({params, query, body}) => {

            const path = [this.model].concat(params || []);

            const apiQuery = resolveApi({path: path, action: this.action || false, query: query || false})


            return new Promise((resolve, reject) => {

                const options = this.options;
                options.body = body || null;

                fetch(apiQuery, options).then((response) => {

                    response.json().then((data) => {

                        if (response.status == 200 || response.status == 304) {
                            resolve(this.prePare(data));
                        } else {
                            reject(data);
                        }

                    }).catch((response) => {
                        reject(response);
                    })

                })


            })
        }

        super(TYPE, apiFunc);

        this.model = model;
        this.action = action;
        this.options = options || {method: 'GET'};
        this.prePare = prePare || ((data) => (data));

    }

}