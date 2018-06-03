import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { apiServiceMiddleware } from '../middleware/api-service';
import User from '../models/User'

const initialState = {
  tweet: {loading: false, data: []},
  user: {
    user : new User({id: 2, username: 'Test 2'}),
    list : []
  }
};

const store = createStore(
  reducers,
  JSON.parse(window.localStorage.getItem('admin')) || initialState,
  applyMiddleware(thunk, logger, apiServiceMiddleware)
);

/*
store.subscribe(() => {
  let storeState = store.getState(),
    state = {...storeState, tweet: {...storeState.post, data: storeState.tweet.data || []}};

  window.localStorage.setItem('admin', JSON.stringify(state))
});
*/

export default store;