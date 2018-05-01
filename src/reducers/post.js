import { FETCH_POSTS, FETCH_POSTS_PENDING } from "../constants";

const initialState = {
  loading: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {...state, loading: true};
    default:
      return state;
  }
}