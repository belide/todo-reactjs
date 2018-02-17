import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  deleteTriggerHandler = (id) => {
    return this.props.click(id)
  }; 
  render() {
    let todos = this.props.todos.map((todo, i) => <Todo name={todo} key={i} id={i} click={this.deleteTriggerHandler}/>);
    return (
      <ul>{todos}</ul>
    );
  }
}

export default Todos;

