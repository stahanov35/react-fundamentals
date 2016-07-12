import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import MainHeader from './components/Header';
import App from './components/Main';
import List from './components/CommentList';
import Footer from './components/Footer';

// Render the main component into the dom
ReactDOM.render(<MainHeader />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<List />, document.getElementById('list'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
