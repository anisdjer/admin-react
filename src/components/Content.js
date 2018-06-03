import React from 'react';
import { NavLink } from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

import MenuBar from './MenuBar';
import Main from './Main';

export default class Content extends React.Component {  
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div className="row">
            <MenuBar />
            <Route path="/" component={Main}/>
          </div>
        </Router>
      </div>
    );
  }
}