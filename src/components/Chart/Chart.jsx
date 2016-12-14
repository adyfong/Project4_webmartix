import React from 'react';

var ReactDOM = require('react-dom');
var d3 = require('d3');
var BarChart = require('react-d3-components').BarChart;
var scope;

export default class Chart extends React.Component
{
constructor()
{
    super()
    scope=this;
}

componentWillMount() {
    console.log('componentWillMount')
    this.props.getAnswers;
    console.log('inside mount the values of props --> ', this.props);
}


render()
{
var data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];


  return(
    <div id='scoreboard'>
      <BarChart
         data={data}
         width={400}
         height={400}
        //title="Answer Results"
        // xScale={1}
        // yScale={1}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
      />
    </div>
  )}
}






