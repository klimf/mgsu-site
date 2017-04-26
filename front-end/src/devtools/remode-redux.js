import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools,} from 'remote-redux-devtools';
import combinedRedusers from  '../common/reducers/appReducers';
const remotedev = require('remotedev-server');

remotedev({
    hostname: '127.0.0.1',
    port: 1024,
});

let composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'Your Instance Name',
    host: '127.0.0.1',
    port: 1024, // the port your remotedev server is running at
});

const store = createStore(
    combinedRedusers,
    composeEnhancers(
        applyMiddleware(thunk),
        remotedev
    )
);