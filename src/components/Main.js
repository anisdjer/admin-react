import React from 'react';
import { Route } from 'react-router-dom';

import TweetList from '../containers/TweetList';

export default class Main extends React.Component {  
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <Route exact strict path="/tweets" component={TweetList}/>
      </main>
    );
  }
}