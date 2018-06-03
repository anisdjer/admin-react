import React from 'react';

export default class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTweet: false
    };

    this.init(props);
  }

  init({
    fetchTweets,
    fetchUserTweets,
    receiveTweets,
    saveTweet,
    newTweet,
    deleteTweet,
    fetchUsers,
    updateTweet,
    receiveUsers,
  }) {
    this.apiFetchTweets = fetchTweets;
    this.apiFetchUserTweets = fetchUserTweets;
    this.apiReceiveTweets = receiveTweets;
    this.apiSaveTweet = saveTweet;
    this.apiNewTweet = newTweet;
    this.apiDeleteTweet = deleteTweet;
    this.apiFetchUsers = fetchUsers;

    this.apiReceiveUsers = receiveUsers;

    this.updateTweet = updateTweet;
  }

  componentDidMount() {
    this.fetchTweets();
    this.fetchUsers()
  }

  newTweet() {
    this.setState({
      newTweet: true
    })
  }

  fetchUsers() {
    this.apiFetchUsers(this.apiReceiveUsers);
  }

  fetchTweets(userId) {
    userId > 0 ? this.apiFetchUserTweets(userId, this.apiReceiveTweets)
      : this.apiFetchTweets(this.apiReceiveTweets);
  }
  
  saveHandler(tweet) {
    tweet.id ? this.apiSaveTweet(tweet, () => {
      this.fetchTweets(this.refs.users_select.value);
    }) : this.apiNewTweet(tweet, () => {
      this.setState({
        newTweet: false
      })
      this.fetchTweets(this.refs.users_select.value);
    });
  }
  
  updateHandler(tweetId) {
    this.updateTweet(tweetId);
  }
  
  deleteHandler(tweetId) {
    this.apiDeleteTweet(tweetId, () => {
      this.fetchTweets(this.refs.users_select.value);
    });
  }

  renderNewTweet() {
    return this.state.newTweet && (
      <tr key="new_tweet">
        <td></td>
        <td>
        <select ref="users_select_new_tweet" className="btn btn-sm btn-outline-secondary dropdown-toggle">
          {
            this.props.users.map(user => (<option key={user.id} value={user.id}>{user.username}</option>))
          }
        </select>
        </td>
        <td>
          <textarea ref="tweet_new_tweet" />
        </td>
        <td></td>
        <td></td>
        <td>
          <button className="btn btn-success"
              onClick={() => this.saveHandler({body: this.refs[`tweet_new_tweet`].value, userId: this.refs[`users_select_new_tweet`].value})}
            >
              Save
            </button>
        </td>
      </tr>
    );
  }

  renderTweets() {
    return this.props.tweets.data.map(tweet => (
      <tr key={tweet.id}>
        <td>{tweet.id}</td>
        <td>
          {
            tweet.isEditing ?
            (
              <select defaultValue={tweet.user.id} ref={`users_select${tweet.id}`} className="btn btn-sm btn-outline-secondary dropdown-toggle">
                {
                  this.props.users.map(user => (<option key={user.id} value={user.id}>{user.username}</option>))
                }
              </select>
            ) : tweet.user.username
          }
        </td>
        <td>{
          tweet.isEditing ? 
          <textarea defaultValue={tweet.body} ref={`tweet${tweet.id}`} />
          : tweet.body
        }</td>
        <td>{(new Date(tweet.createdAt)).toLocaleString()}</td>
        <td>{(new Date(tweet.updatedAt)).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger"
            onClick={() => this.deleteHandler(tweet.id)}
          >
            Delete
          </button>
          {
            tweet.isEditing ?
              (
                <button className="btn btn-success"
                  onClick={() => this.saveHandler({...tweet, body: this.refs[`tweet${tweet.id}`].value, userId: this.refs[`users_select${tweet.id}`].value})}
                >
                  Save
                </button>)
            : (
              <button className="btn btn-info"
                onClick={() => this.updateHandler(tweet.id)}
              >
                Update
              </button>
            )
          }
        </td>
      </tr>)
    );
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Tweets</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button onClick={() => this.newTweet()} className="btn btn-sm btn-outline-secondary btn-success">
                  Add a tweet
                </button>
              </div>
              <select ref="users_select" onChange={(e) => this.fetchTweets(e.target.value)} className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <option value="0">All users</option>
                {
                  this.props.users.map(user => (<option key={user.id} value={user.id}>{user.username}</option>))
                }
              </select>
            </div>
          </div>

        <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Content</th>
                  <th>Created at</th>
                  <th>Updated at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.renderNewTweet()}
                {this.renderTweets()}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}