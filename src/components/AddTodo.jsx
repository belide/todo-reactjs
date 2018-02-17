import React, { Component } from 'react';

class AddTodo extends Component {
  addTodoHandler = (e) => {
    e.preventDefault();
    // pass the the newTodo as an argument (this go from parent componenet app.js)
    this.props.click(this.refs.todo.value);
    // empty the input todo 
    this.refs.todo.value = ''; 
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addTodoHandler}>
          <input type="text" placeholder="todo..." ref="todo" />
          <input type="submit" value="Go!" onClick={this.addTodoHandler} />
        </form>
      </div>
    );
  }
}

export default AddTodo;

