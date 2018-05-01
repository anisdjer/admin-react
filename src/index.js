import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import PostList from './components/PostList';
import './index.scss';


ReactDOM.render(
        <Router>
            <div>
                <Navbar />
                <Route exact strict path="/" component={PostList}/>
            </div>
        </Router>,
    document.getElementById('app')
);