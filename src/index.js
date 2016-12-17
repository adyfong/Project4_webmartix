import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App/App.jsx';
import SurveyForm from './components/SurveyForm/SurveyForm.jsx';
import ChartForm from './components/ChartForm/ChartForm.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/survey" component={SurveyForm}/>
      <Route path="/chart" component={ChartForm}/>
   </Router>
 ), document.querySelector('#root-container'));



