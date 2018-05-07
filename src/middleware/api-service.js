import { FETCH_API, FETCH_POSTS_FULLFILLED } from "../constants";
import Axios from "axios";
import apiRoutes from '../utils/api-routes';

export const apiServiceMiddleware = store => next => action => {
  if (action.type === FETCH_API && action.route) {
    Axios.get(apiRoutes.generateRoute(action.route, action.routeParams || {}))
      .then(res => {
        next({
          type: FETCH_POSTS_FULLFILLED,
          payload: res.data.data
        })
      })
  } else {
    next(action);
  }
}
