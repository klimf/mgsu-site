import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './containers/App';

function red() {

}
const store = createStore(red);

console.log(browserHistory)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


require("./styles/libs/foundation.css");
require('./styles/main.scss');