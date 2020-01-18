// Tutorial(https://youtu.be/vIA130MePY8) from Coding Garden with CJ

import React, { Component } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello DG!",
      newTodo: "",
      todos: []
    };
  }
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }
  toggleTodoDone(event, index) {
    // console.log(event.target.checked);
    const todos = [...this.state.todos]; //copy the array
    todos[index] = { ...todos[index], done: event.target.checked }; //copy the todo and update done property on the copied todo
    // console.log(todos);
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />
        <button onClick={() => this.allDone()}>All done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
