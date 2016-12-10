import React  from 'react';
import QuestionForm  from '../QuestionForm/QuestionForm.jsx';
import './App.css';



export default class App extends React.Component {


constructor(props) {
    super();

    this.state = {
   //what is different with{} or []
      questions: {},
    };

  // this.addTask = this.addTask.bind(this);
}



// addTask(name, desc){
//   //... the spread operator it clones so when you change the clone it

//   //supply an object fetch from localhost objst has headers.

//   // const newState = {...this.state.tasks}
//  // Post the db, this nameand desc
//  // .then update the state

//  // this.setState({tasks: newState})
// AjaxAdapter.createTask({name, desc})
// .then(newTask => {
//        const newState = {...this.state.tasks};
//        newState[newTask.id] =newTask
//        this.setState({tasks: newState})
//     })
//      .catch((error) => {
//        throw error;
//    });
//
  // <TaskForm addTask={this.addTask} />

// }



render() {
    return (
      <div>
       <QuestionForm />
       <iframe src="http://www.w3schools.com" width="555" height="600"></iframe>
      </div>
  );
 }
}
