import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import youtubeApp from './reducers';
import './index.css';

const store = createStore(
  youtubeApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, promiseMiddleware()),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
