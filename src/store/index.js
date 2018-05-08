import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { apiServiceMiddleware } from '../middleware/api-service';
import User from '../models/User'

const initialState = {
  post: {loading: false, data: []},
  user: new User({id: 1, username: 'Test'})
};

const store = createStore(
  reducers,
  JSON.parse(window.localStorage.getItem('admin')) || initialState,
  applyMiddleware(thunk, logger, apiServiceMiddleware)
);

/*
store.subscribe(() => {
  let storeState = store.getState(),
    state = {...storeState, post: {...storeState.post, data: [storeState.post.data[0] || undefined]}};

  window.localStorage.setItem('admin', JSON.stringify(state))
});
*/

export default store;