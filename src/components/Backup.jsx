Backip.jsx


webmatrix_db=# select SUM(cast(a1 as int))/count(*), SUM(cast(a2 as int))/count(*), SUM(cast(a3 as int))/count(*), SUM(cast(a4 as int))/count(*), SUM(cast(a5 as int))/count(*) from answers;
https://github.com/codesuki/react-d3-components#piechart


// {this.props.answers.map((sID, i) =>{



  console.log('sID.a1 ' + sID.a1);

// var data = [{
//     label: 'Answer',
//     // values: [{x: 'a1', y: 8}, {x: 'a2', y: 4}, {x: 'a3', y: 3}]

//      values: [{x: 'a1', y: sID.a1}, {x: 'a2', y: sID.a2}, {x: 'a3', y: sID.a3}]
// }];

const renderAnswers = props.answers.map((q, i) => {
    console.log(`rendering question ${i} of ${props.questions.length}`);

    return (
      <Questions
        key={i}
        id={q.id}
        votes={q.votes}
        question_title={q.question_title}
        question_body={q.question_body}
        question_tags={q.question_tags}
        likeQuestions={props.likeQuestions}
      />
    )
  });


answers
Object.key(answers)

              // <div id='scoreboard'>

            //      <BarChart
            //              data={data}
            //              width={400}
            //             height={400}
            //             //title="Answer Results"
            //             // xScale={1}
            //             // yScale={1}
            //             margin={{top: 10, bottom: 50, left: 50, right: 10}} />
            // </div>
    //     )}



    console.log('render' + this.props.answers);
    console.log('render a1' + JSON.stringify(this.props.answers));
    {this.props.answers.map((q, i) => {
      console.log(`rendering question ${i} of ${props.answers.length}`);
      console.log('...q.a1 ' + q.a1);

    <div className="dork">

     {this.props.answers.map((survey, i) =>{
      console.log('Other Way: ' + this.props.answers[0].a1)

      console.log('#' + i + ' survey.a1 ' + survey.a1);
      console.log('#' + i + ' survey.a2 ' + survey.a2);
      console.log('#' + i + ' survey.a3 ' + survey.a3);

      return(
        <h1>Hi</h1>
      )})
    }
   </div>



Code in APP.js


    <h1> WEBMATRIX User Testing</h1>
         <button className="chart_data">
               <Link to="/chart">Chart</Link>
         </button>
       <div>
       <div className="user_signup_login">
         <button className="sign_up">
               <Link to="/signup">SignUp</Link>
         </button>
         <button className="login">
               <Link to="/login">Login</Link>
         </button>
       </div>

   <IndexRoute component={Home}/>


       in Chart
       {this.props.answers.map((survey, i) =>{
})}


       [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]

var data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];


      Object.keys(this.props.answers)

      {this.props.answers.map((survey, i) =>{
      parseInt()



        <h1> WEBMATRIX User Testing</h1>
         <button className="chart_data">
               <Link to="/chart">Chart</Link>
         </button>

