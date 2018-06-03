import { combineReducers } from 'redux';
import tweet from './tweet';
import user from './user';

export default combineReducers({
  tweet,
  user
});