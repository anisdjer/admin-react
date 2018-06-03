import { FETCH_TWEETS_FULLFILLED, FETCH_API, UPDATE_TWEET } from '../constants';

export const updateTweet = (tweetId) => (dispatch) => dispatch({type: UPDATE_TWEET, tweetId});

export const receiveTweets = (payload) => (dispatch) => dispatch({type: FETCH_TWEETS_FULLFILLED, payload});

export const fetchUserTweets = (userId, callback) => (dispatch) => 
  dispatch({
    type: FETCH_API,
    route: 'user_tweets',
    routeParams: {userId},
    callback
  });

  export const fetchTweets = (callback) => (dispatch) => 
    dispatch({
      type: FETCH_API,
      route: 'tweets',
      callback
    });

export const saveTweet = (tweet, callback) => (dispatch) => 
  dispatch({
    type: FETCH_API,
    route: 'tweet',
    method: 'put',
    body: tweet,
    routeParams: {tweetId: tweet.id},
    callback
  });

export const newTweet = (tweet, callback) => (dispatch) => 
  dispatch({
    type: FETCH_API,
    route: 'tweets',
    method: 'post',
    body: tweet,
    callback
  });
  
export const deleteTweet = (tweetId, callback) => (dispatch) => 
  dispatch({
    type: FETCH_API,
    route: 'tweet',
    method: 'delete',
    routeParams: {tweetId},
    callback
  });
