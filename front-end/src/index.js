import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import {store} from './App/Store';



ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

import './styles/main.scss';
import './styles/lib/foundation.css';