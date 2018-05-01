import React from 'react';
import { NavLink } from 'react-router-dom';



export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Admin</a>
            <div>
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" activeClassName="active" exact to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" exact to="/posts">Posts</NavLink>
                </div>
            </div>
        </nav>
    );
  }
}