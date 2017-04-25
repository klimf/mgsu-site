import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"
import Routes from './common/Routes';
import {store} from './common/Store';
import App from "./common/App"




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
     </Router>
  </Provider>,
  document.getElementById('root')
);

import './styles/main.scss';
import './styles/lib/foundation.css';