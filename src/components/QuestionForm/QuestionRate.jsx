import React from 'react';

export default class QuestionRate extends React.Component {

constructor(props) {
  super(props);
  this.handleOptionChange = this.handleOptionChange.bind(this);
}

handleOptionChange(event) {
  console.log('HI I AM IN handleOptionChange e.t.v ' + event.target.value)
  this.props.setOption(this.props.question_id, event.target.value);
  console.log('t.p.s ' + this.props.selectedOption)
};

componentWillMount() {
    console.log('QuestionRate inside mount the values of props --> ', this.props);
}

render(){
  console.log('this.props.selectedOption ' + this.props.selectedOption)
  return (
   <div>
      <div className="radio">
      <label>
        <input type="radio" value="1"
                      checked={this.props.selectedOption === '1'}
                      onChange={this.handleOptionChange}
                   />
           1
      </label>
      <label>
        <input type="radio" value="2"
                     checked={this.props.selectedOption === '2'}
                     onChange={this.handleOptionChange}
                   />
            2
      </label>
      <label>
        <input type="radio" value="3"
                     checked={this.props.selectedOption === '3'}
                     onChange={this.handleOptionChange}
                   />
            3
      </label>
      <label>
        <input type="radio" value="4"
                     checked={this.props.selectedOption === '4'}
                     onChange={this.handleOptionChange}
                   />
            4
      </label>
       <label>
        <input type="radio" value="5"
                     checked={this.props.selectedOption === '5'}
                     onChange={this.handleOptionChange}
                   />
            5
      </label>
   </div>
 </div>
  )
}

}
