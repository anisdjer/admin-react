import React from 'react';
import { NavLink } from 'react-router-dom';



export default class Navbar extends React.Component {
  render() {
    let navbarBrand = this.props.user.username ?
        `Hello ${this.props.user.username}`
        : 'Admin React';

    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{navbarBrand}</a>
        <ul className="navbar-nav px-3">
            {/*<li className="nav-item text-nowrap">
                <a className="nav-link" href="#">Sign out</a>
    </li>*/}
        </ul>
      </nav>
    );
    /*
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
    );*/
  }
}