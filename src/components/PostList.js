import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/posts-list.scss'

export default class PostList extends React.Component {
  /*constructor(props) {
    super(props);

    this.props = {...props, posts: {data: []}};
  }*/
  handleLoad() {
    this.props.fetchPosts(this.refs.userId.value);
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
            {post.attributes.body}
          </p>
        </li>
      );
    });
    return (
      <div className="container posts-list">
        <h1>Blog</h1>
        <input type="number" ref="userId" defaultValue="1"/><button onClick={this.handleLoad.bind(this)}>Load Data</button>
        <ul className="container">
          {posts}
        </ul>
      </div>
    )
  }
}