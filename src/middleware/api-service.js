import { FETCH_API, FETCH_POSTS_FULLFILLED } from "../constants";
import Axios from "axios";
import apiRoutes from '../utils/api-routes';
import apiModelFactory from '../utils/api-model-factory';

export const apiServiceMiddleware = store => next => action => {
  if (action.type === FETCH_API && action.route) {
    Axios.get(apiRoutes.generateRoute(action.route, action.routeParams || {}))
      .then(res => {
        let result = res.data.data,
          payload;

        if (Array.isArray(result)) {
          payload = result.map(item => apiModelFactory(item))
        } else {
          payload = apiModelFactory(result);
        }

        next({
          type: FETCH_POSTS_FULLFILLED,
          payload
        })
      })
  } else {
    next(action);
  }
}
