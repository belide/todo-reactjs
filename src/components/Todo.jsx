import React, { Component } from 'react';

class Todo extends Component {
  removeTodo = (e) => {
    e.preventDefault();
    return this.props.click(e.target.id)
  };

  render() {
    return <li>{this.props.name} <a href="" onClick={this.removeTodo} id={this.props.id}>x</a></li>
  }
}

export default Todo;

