import { FETCH_POSTS, FETCH_POSTS_PENDING, FETCH_POSTS_FULLFILLED } from "../constants";

const initialState = {
  loading: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {...state, loading: true};
      case FETCH_POSTS_FULLFILLED:
        return {...state, loading: false, data: action.payload};
    default:
      return state;
  }
}
