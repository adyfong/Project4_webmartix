import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
import App from './components/App/App.jsx';
// import Chart from './components/Chart/Chart.jsx'



// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#root-container'));

// ReactDOM.render((
//    <Router history={hashHistory}>
//        <Route path="/" component={App}/>
//        <Route path="/chart" component={Chart}/>
//    </Router>
//  ), document.querySelector('#root-container'));
