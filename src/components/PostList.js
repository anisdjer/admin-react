import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/posts-list.scss'

export default class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.user.id);
  }
  
  render() {
    let {data: postList} = this.props.posts;

    let posts = postList.map(post => {
      return (
        <li className="post-item"  key={post.id}>
          <p className="post-title">
            <NavLink to={`/posts/${post.id}`}>
              Le {(new Date(post.created_at)).toLocaleString()}
            </NavLink>
          </p>
          <p className="post-body">
            {post.body}
          </p>
        </li>
      );
    });
    return (
      <div className="container">
        <h2>Tweets</h2>
        <ul className="posts-list">
          {posts}
        </ul>
      </div>
    )
  }
}