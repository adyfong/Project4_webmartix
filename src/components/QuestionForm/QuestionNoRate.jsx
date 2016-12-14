import React from 'react';
import './QuestionNoRate.css';


export default class QuestionList extends React.Component {
// (function or class???)


constructor(props) {
  super(props);

}

 componentWillMount() {
    this.props.getQuestions();
    console.log('inside mount the values of props --> ', this.props);
}


render(){
  return(
    <form >

    <div className="containerRight">
     {this.props.questions.map((qID, i) =>{
              console.log('qID.id ' + qID.id);

       return (
        <div className="ListQuestionOnly" key={i}>
          <h2> This survey is for "http://www.w3schools.com" </h2>
          <h2>{qID.q1}</h2>

          <h2>{qID.q2}</h2>

          <h2>{qID.q3}</h2>

          <h2>{qID.q4}</h2>

          <h2>{qID.q5}</h2>

       </div>
           )}
       )}
    </div>
     </form>
     )
 }

}

