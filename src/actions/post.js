import axios from 'axios';
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULLFILLED, FETCH_API } from '../constants';

export const fetchPosts = (userId) => (dispatch) => 
  dispatch({type: FETCH_API, route: 'get_user_tweets', routeParams: {userId}});
