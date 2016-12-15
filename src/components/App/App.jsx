import React from 'react'
import { Link } from 'react-router';
import './App.css';

export default React.createClass({
  render() {
    return (
      <div className="app-container">

      <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />

        <h1 className="app-title">WebMatrix</h1>
        <h2 className="company-intro">An evaluation rating solution for websites - by friends and professional team</h2>
        <div className="primary-function">
          <Link to="/survey" className="survey-box">Survey</Link>
          <Link to="/chart" className="chart-box">Chart</Link>
        </div>
      </div>

    )
  }
})
