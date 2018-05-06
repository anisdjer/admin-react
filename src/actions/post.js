import axios from 'axios';
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULLFILLED } from '../constants';

export const fetchPosts = () => (dispatch) => {
  dispatch({type: FETCH_POSTS_PENDING});
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch({type: FETCH_POSTS_FULLFILLED, payload: res.data})
    });
}
