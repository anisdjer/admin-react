import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store'
import Navbar from './containers/Navbar';
import Content from './components/Content';

import './styles/dashboard.scss';

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navbar />
            <Content />
        </div>
    </Provider>,
    document.getElementById('app')
);