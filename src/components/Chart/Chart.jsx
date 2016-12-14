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
    console.log('componentWillMount ' + JSON.stringify(this.props));
    this.props.getAnswers();
    // console.log('inside mount the values of props --> ', JSON.stringify(this.props);
    console.log('this is props info' + JSON.stringify(this.props.answers));

}

// console.log('this is props info' + this.props.answers[0].a1);


render()
{
//this took the longers to find out, somehow in my data collection,
 // it takes the values is blank so I need this to solve the problem

  const haveValue = this.props.answers.length;
  if (haveValue) {
    var data = [{
        label: 'somethingA',
        values: [{x: 'Ans 1', y: parseInt(this.props.answers[0].a1)},
                 {x: 'Ans 2', y: parseInt(this.props.answers[0].a2)},
                 {x: 'Ans 3', y: parseInt(this.props.answers[0].a3)},
                 {x: 'Ans 4', y: parseInt(this.props.answers[0].a4)},
                 {x: 'Ans 5', y: parseInt(this.props.answers[0].a5)}]
    }]
  } else {
    var data = [{
        label: '',
        values: [{x: '', y: 0},
                 {x: '', y: 0},
                 {x: '', y: 0},
                 {x: '', y: 0},
                 {x: '', y: 0}]
    }]
  }

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






