import axios from 'axios';
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULLFILLED } from '../constants';

export const fetchPosts = (userId) => (dispatch) => {
  dispatch({type: FETCH_POSTS_PENDING});
  
  axios.get(`http://localhost:3000/api/users/${userId}/tweets`)
    .then(res => {
      dispatch({type: FETCH_POSTS_FULLFILLED, payload: res.data.data})
    })
    .catch(err => {
      dispatch({type: FETCH_POSTS_FULLFILLED, payload: []})
    });
}
