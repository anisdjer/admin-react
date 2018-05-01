import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/posts-list.scss'

export default class PostList extends React.Component {
  render() {
    let postList = [
      {
        id: 'rrrr',
        userId: 1,
        title: 'Title Post 1',
        body: 'Body Post 1'
      }, {
        id: 'sdsd',
        userId: 1,
        title: 'Title Post 2',
        body: 'Body Post 2'
      },
    ];
    let posts = postList.map(post => {
      return (
        <div className="post-item"  key={post.id}>
          <hr />
          <h3 className="post-title">
            <NavLink exact to={`/posts/${post.id}`}>
              {post.title}
            </NavLink>
          </h3>
          <p className="post-body">
            {post.body}
          </p>
        </div>
      );
    });
    return (
      <div className="container posts-list">
        <h1>Blog</h1>
        <div className="container">
          {posts}
        </div>
      </div>
    )
  }
}