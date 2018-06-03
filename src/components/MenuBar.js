import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuBar extends React.Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-item nav-link" exact to="/">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" exact to="/tweets">Tweets</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}