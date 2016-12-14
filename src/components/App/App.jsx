import React from 'react'
import { Link } from 'react-router';
import './App.css';

export default React.createClass({
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">WebMatrix</h1>
        <h2 className="company-intro">An evaluation rating solution for websites by friends to professional team</h2>
        <ul className="primary-function">
          <li><Link to="/survey" className="survey-box">Survey</Link></li>
          <li><Link to="/chart" className="chart-box">Chart</Link></li>
        </ul>
      </div>

    )
  }
})
