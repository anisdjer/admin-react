import React from 'react';
import { NavLink } from 'react-router-dom';



export default class Navbar extends React.Component {
  render() {
    let navbarBrand = this.props.user.username ?
        `Hello ${this.props.user.username}`
        : 'Admin React';

    return (
      <nav className="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor: 'rgb(235, 237, 239)'}}>
            <a className="navbar-brand" href="#">
                {navbarBrand}
            </a>
            <div>
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/posts">Posts</NavLink>
                </div>
            </div>
        </nav>
    );
  }
}