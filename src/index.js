import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const tasks = ['take out trash', 'shovel the driveway','walk the dog'];

  // const element = 
  //   <div>
  //     <h1>Task List</h1>
  //       <ol>
  //         { tasks.map((task, index) => <li key= {index}> {task} </li>)}
  //       </ol>
  //   </div>

class List extends Component {
  render() {
  return (
    <ol>
        {tasks.map((task, index) => <li key= {index}> {task} </li>)}
    </ol>
    )
  }
}

class Title extends Component {
  render() {
    return <h1>Task List</h1>
  }
}

class Main extends Component {
  render(){
    return <div> 
      <Title />
      <List />
    </div>
  } 
}

ReactDOM.render(<Main/>, document.getElementById('root'));