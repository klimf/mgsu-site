import {CREATE, fetchUtils} from "admin-on-rest";
import {resolveApi} from "../common/helpers";

const createRequest = (type, resource, params) => {
    try {
        let apiQuery = {
            url: '',
            options: {}
        };

        const _typesHandlers = {
            GET_LIST: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource],
                        query: params.query
                    })

            },
            GET_ONE: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource, params.id],
                        query: params.query
                    })
            },
            GET_MANY: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource],
                        query: params.query
                    })
            },
            GET_MANY_REFERENCE: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource],
                        query: params.query
                    })
            },
            CREATE: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource, params.id],
                    })
                apiQuery.options.method = 'POST';
                apiQuery.options.body = params.data;
            },
            UPDATE: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource, params.id],
                    })
                apiQuery.options.method = 'PUT'
                apiQuery.options.body = params.data;
            },
            DELETE: () => {
                apiQuery.url = resolveApi(
                    {
                        path: [resource, params.id, 'remove'],
                    })
                apiQuery.options.method = 'POST'
            }
        };

        if (_typesHandlers[type]) {

            _typesHandlers[type]();
            return apiQuery;

        } else {

            throw new Error(`Unsupported fetch action type ${type}`);

        }

    } catch (e) {
        console.log(e);
    }
};

const formatResponse = (response, type, resource, params) => {

    const {json} = response;

    switch (type) {
        case CREATE:
            return {data: {...params.data, id: json}, total: 1000};
        default:
            return {data: json.docs || json, total: 1000};
    }
};

export default (type, resource, params) => {
    const {url, options} = createRequest(type, resource, params)
    options.headers = new Headers({'Content-Type': 'application/json'});
    options.headers.set('Authorization', 'Basic bWV0YWxsaWM6bWV0YWxsaWM=');
    //options.credentials = 'include';
    const {fetchJson} = fetchUtils;
    return fetchJson(url, options)
        .then(response => formatResponse(response, type, resource, params));
}