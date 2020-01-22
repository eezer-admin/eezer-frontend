import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import eezerApp from './reducers/reducers'
//import { getTransports, getUsers } from './actions/actions'

let store = createStore(eezerApp, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

/* Maybe prefetch transports if logged in... */

//store.dispatch(getTransports());
//store.dispatch(getUsers());

registerServiceWorker();
