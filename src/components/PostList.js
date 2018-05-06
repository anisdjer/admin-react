import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/posts-list.scss'

export default class PostList extends React.Component {
  handleLoad() {
    this.props.fetchPosts();
  }
  render() {
    let {data: postList} = this.props.posts;

    let posts = postList.map(post => {
      return (
        <li className="post-item"  key={post.id}>
          <p className="post-title">
            <NavLink exact to={`/posts/${post.id}`}>
              {post.title}
            </NavLink>
          </p>
          <p className="post-body">
            {post.body}
          </p>
        </li>
      );
    });
    return (
      <div className="container posts-list">
        <h1>Blog</h1>
        <button onClick={this.handleLoad.bind(this)}>Load Data</button>
        <ul className="container">
          {posts}
        </ul>
      </div>
    )
  }
}