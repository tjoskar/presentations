import React from "react";
import ReactDOM from "react-dom";

function App() {
  return 'Hello World!';
}

ReactDOM.render(React.createElement(App), document.querySelector("#my-app"));






































// class App extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = { todoList: [], newTaskName: '' };
//   }
  
//   async componentDidMount() {
//     const todoList = await fetchAllTodos();
//     this.setState({ todoList });
//   }

//   onTaskNameChange(newTaskName) {
//     this.setState({ newTaskName });
//   }

//   async onSubmit(event) {
//     event.stopPropagation();
//     event.preventDefault();
//     const newTask = await createNewTask(this.state.newTaskName);
//     this.setState({
//       newTaskName: '',
//       todoList: [...this.state.todoList, newTask]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.todoList.map(task => (
//             <li key={task.id}>
//               <input type="checkbox" id={task.id} name="complete" checked={task.checked} />
//               <label htmlFor={task.id}> {task.taskName}</label>
//             </li>
//           ))}
//         </ul>
//         <form>
//           <input type="text" value={this.state.newTaskName} onChange={e => this.onTaskNameChange(e.target.value)} />
//           <button onClick={e => this.onSubmit(e)}>Save</button>
//         </form>
//       </div>
//     );
//   }
// }

// async function fetchAllTodos() {
//   return fetch(
//     "https://my-json-server.typicode.com/tjoskar/presentations/todos"
//   ).then(r => r.json());
// }

// function createNewTask(taskName) {
//   return fetch('https://my-json-server.typicode.com/tjoskar/presentations/todos', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ taskName })
//   }).then(r => r.json());
// }

// ReactDOM.render(<App />, document.querySelector("#my-app"));
