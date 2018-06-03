import Axios from "axios";
import { FETCH_API } from "../constants";
import apiRoutes from '../utils/api-routes';
import apiModelFactory from '../utils/api-model-factory';

export const apiServiceMiddleware = store => next => action => {
  if (action.type === FETCH_API && action.route) {
    Axios[action.method || 'get'](apiRoutes.generateRoute(action.route, action.routeParams || {}), action.body || {})
      .then(res => {
        let result = res.data.data,
          payload;

        if (Array.isArray(result)) {
          payload = result.map(item => apiModelFactory(item))
        } else {
          payload = apiModelFactory(result);
        }

        action.callback && action.callback(payload)
      })
  } else {
    next(action);
  }
}
