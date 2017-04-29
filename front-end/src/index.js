import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./common/App";
import {initStore} from "./common/Store";

const initState = window.__PRELOADED_STATE__;
const store = initStore(initState);
delete window.__PRELOADED_STATE__;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

import "./styles/lib/foundation.css";
import "./styles/main.scss";