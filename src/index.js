import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store'
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import './index.scss';

window.store = store;

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