import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import TweetList from '../components/TweetList';
import { fetchUserTweets, fetchTweets, saveTweet, newTweet, deleteTweet, receiveTweets, updateTweet } from '../actions/tweet';
import { fetchUsers, receiveUsers } from '../actions/user'
import { selectUser, selectUsers } from '../selectors/user';
import { selectTweet } from '../selectors/tweet';

const mapStateToProps = (state) =>  ({tweets: selectTweet(state), user: selectUser(state), users: selectUsers(state)});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  fetchUserTweets,
  fetchTweets,
  saveTweet,
  newTweet,
  deleteTweet,
  receiveTweets,
  updateTweet,
  fetchUsers,
  receiveUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
