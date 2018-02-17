import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './styles/App.css';

class App extends Component {
  state = {
    todos: []
  };

  addTodoHandler = (newTodo) => {
    let todos = this.state.todos;
    todos.push(newTodo)
    this.setState({todos})
  }

  removeTodoHandler = (i) => {
    let todos = this.state.todos;
    todos.splice(i, 1);
    this.setState({todos});
  }; 

  render() {
    return (
      <div className="App">
        <h1>React Todo app</h1>  
        <AddTodo click={this.addTodoHandler} />
        <Todos todos={this.state.todos} click={this.removeTodoHandler} />
      </div>
    );
  }
}

export default App;
