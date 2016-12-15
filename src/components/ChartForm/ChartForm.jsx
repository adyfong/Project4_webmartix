import React  from 'react';
import QuestionNoRate  from '../QuestionForm/QuestionNoRate.jsx';
import Chart from '../Chart/Chart.jsx';
import './ChartForm.css';

export default class SurveyForm extends React.Component {


constructor(props) {
    super(props);
    //set whatever initial states that will be changed or modified over time
      this.state = {
      questions: [],
      answers: [],
      selectedOption: ['1', '1', '1', '1', '1'],
    }
  }

getQuestions() {
  fetch('/api/questions/')
    .then(data => data.json())
    .then(data => {
      this.setState({questions: data});
    })
    .catch((error) => {
      console.log(error);
    });
}



addAnswers(survey_id, selectedOption) {
      console.log('inside addAnswer' + survey_id, selectedOption);
      fetch('/api/answers', {
      method:  'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({survey_id: survey_id,
                            selectedOption: selectedOption})
    })
    .then(() => {
      console.log('added answer');
    })
    .catch(err => console.log(error));
}

setOption(question_id, value) {
  console.log('HI WE SRE IN setOption in App.jsx')
  console.log('question_id ' + question_id)
  // this.setState({selectedOption[question_id]: value})
  // http://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
  this.state.selectedOption[question_id] = value;
  this.forceUpdate()
}

getAnswers() {
  console.log('getAnswers')
  fetch('/api/answers/')
    .then(data => data.json())
    .then(data => {
      console.log('answer from databd' + data);
      this.setState({answers: data});
    })
    .catch((error) => {
      console.log(error);
    });
}


render() {
    return (
      <div className="chart_container">
        <div className="chart-background">
          <Chart
          getAnswers={this.getAnswers.bind(this)}
          answers={this.state.answers}
          />
        </div>
        <div className="chart-background-b">
           <QuestionNoRate className="box-container"
           getQuestions={this.getQuestions.bind(this)}
           questions={this.state.questions}
           />
        </div>
     </div>
    );
  }
 }
