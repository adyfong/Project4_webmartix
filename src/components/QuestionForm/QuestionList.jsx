import React from 'react';
import QuestionRate from './QuestionRate.jsx'
import './QuestionList.css';


export default class QuestionList extends React.Component {
// (function or class???)


constructor(props) {
  super(props);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

 componentWillMount() {
    this.props.getQuestions();
    console.log('inside mount the values of props --> ', this.props);
}

handleFormSubmit(event) {
  event.preventDefault();
  console.log('HI I AM IN handleFormSubmit' + event.target.value)
  console.log('selection ' + this.props.selectedOption)

  this.props.addAnswers(
    this.props.questions.id,
    this.props.selectedOption
    );
  return false;
};


render(){
  return(
    <form className="rate-submit" onSubmit={this.handleFormSubmit}>

    <div className="containerRight">
     {this.props.questions.map((qID, i) =>{
              console.log('qID.id ' + qID.id);

       return (
        <div className="ListText" key={i}>
          <h2> Rate this website 1:Lowest  5:Highest </h2>
          <h2>{qID.q1}</h2>
            {/*<QuestionRate id="a1"/>
            selectedOption is the array of selected rating for each questions
            setOption is the Method that is pass and
             if it is called then it will get can the selectedOption state in App  */}

            <QuestionRate selectedOption={this.props.selectedOption[0]}
                          setOption={this.props.setOption}
                          question_id='0'/>
          <h2>{qID.q2}</h2>
             <QuestionRate selectedOption={this.props.selectedOption[1]}
                           setOption={this.props.setOption}
                           question_id='1'/>
          <h2>{qID.q3}</h2>
              <QuestionRate selectedOption={this.props.selectedOption[2]}
                            setOption={this.props.setOption}
                            question_id='2'/>

          <h2>{qID.q4}</h2>
              <QuestionRate selectedOption={this.props.selectedOption[3]}
                            setOption={this.props.setOption}
                            question_id='3'/>

          <h2>{qID.q5}</h2>
              <QuestionRate selectedOption={this.props.selectedOption[4]}
                            setOption={this.props.setOption}
                            question_id='4'/>


           <button className="btn" type="submit">SAVE</button>
       </div>
           )}
       )}
    </div>
     </form>
     )
 }

}

