import React from 'react';
import QuestionRate from './QuestionRate.jsx'
import './QuestionList.css';


export default class QuestionList extends React.Component {
// (function or class???)

 componentWillMount() {
    this.props.getQuestions();
    console.log('inside mount the values of props --> ', this.props);

  }

render(){
  return(
    <form>
  {/*}  className="rate-submit" onSubmit={this.handleFormSubmit}> */}

    <div className="containerRight">
     {this.props.questions.map((qID, i) =>{
              console.log('qID.id ' + qID.id);

       return (
        <div className="ListText" key={i}>
          <h1> This survey is for "http://www.w3schools.com" </h1>
          <h2>{qID.q1}</h2>
            {/*<QuestionRate id="a1"/> */}
            <QuestionRate selectedOption={this.props.selectedOption[0]}
                          setOption={this.props.setOption}
                          question_id='0'/>
          <h2>{qID.q2}</h2>
             <QuestionRate selectedOption={this.props.selectedOption[1]}
                          setOption={this.props.setOption}
                          question_id='1'/>
          <h1>{qID.q3}</h1>
              <QuestionRate selectedOption={this.props.selectedOption[2]}
                          setOption={this.props.setOption}
                          question_id='2'/>

          <h1>{qID.q4}</h1>
              <QuestionRate selectedOption={this.props.selectedOption[3]}
                          setOption={this.props.setOption}
                          question_id='3'/>

          <h1>{qID.q5}</h1>
              <QuestionRate selectedOption={this.props.selectedOption[4]}
                          setOption={this.props.setOption}
                          question_id='4'/>


           {/* <button className="btn btn-default" type="submit">Save</button> */}
       </div>
           )}
       )}
    </div>
     </form>
     )
 }

}

