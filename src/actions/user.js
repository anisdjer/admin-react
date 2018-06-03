import { FETCH_USERS_FULLFILLED, FETCH_API } from "../constants";

export const receiveUsers = (payload) => (dispatch) => dispatch({type: FETCH_USERS_FULLFILLED, payload});

export const fetchUsers = (callback) => (dispatch) => 
  dispatch({
    type: FETCH_API,
    route: 'users',
    callback
  });
