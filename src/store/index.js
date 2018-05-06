import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const store = createStore(
  reducers,
  JSON.parse(window.localStorage.getItem('admin') || '{}'),
  applyMiddleware(thunk, logger)
);


store.subscribe(() => {
  let storeState = store.getState(),
    state = {...storeState, post: {...storeState.post, data: [storeState.post.data[0] || undefined]}};

  window.localStorage.setItem('admin', JSON.stringify(state))
});

export default store;