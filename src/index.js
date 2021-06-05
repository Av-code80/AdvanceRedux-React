import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //1) Provider is a component

import './index.css';
import App from './App';
import store from './store/index';  //2)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);