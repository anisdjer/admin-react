import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store'
import Navbar from './containers/Navbar';
import PostList from './containers/PostList';
import {fetchPosts} from './actions/post'
import './index.scss';

window.store = store;
window.fetchPosts = fetchPosts;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Navbar />
                <Route exact strict path="/" component={PostList}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);