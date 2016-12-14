import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

// import Chart from './components/Chart/Chart.jsx'





// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#root-container'));

// ReactDOM.render((
//    <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Home}/>
//         <Route path="/chart" component={Chart}/>
//       </Route>
//    </Router>
//  ), document.querySelector('#root-container'));
