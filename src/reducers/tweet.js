import { FETCH_TWEETS_PENDING, FETCH_TWEETS_FULLFILLED, UPDATE_TWEET } from "../constants";

const initialState = {
  loading: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_PENDING:
      return {...state, loading: true};
    case FETCH_TWEETS_FULLFILLED:
      return {...state, loading: false, data: action.payload || []};
    case UPDATE_TWEET:
      return {...state, loading: false, data: state.data.map((tweet) => {
        tweet.id === action.tweetId && (tweet.isEditing = true);

        return tweet;
      })};
    default:
      return state;
  }
}
