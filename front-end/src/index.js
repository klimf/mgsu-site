import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"
import App from './common/App';
import {initStore} from './common/Store';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App/>
     </Router>
  </Provider>,
  document.getElementById('root')
);

import './styles/lib/foundation.css';
import './styles/main.scss';