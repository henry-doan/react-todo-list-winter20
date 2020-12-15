import { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, title: "Learn Rails", complete: true },
      { id: 2, title: "Learn React", complete: false },
      { id: 3, title: "Learn Router", complete: false },
    ]
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incommingTodo) => {
    const { todos } = this.state
    const newTodo = { ...incommingTodo, id: this.getUniqId() }
    // const newTodo = { title: incommingTodo.title, complete: incommingTodo.complete, id: this.getUniqId() }
    this.setState({ todos: [ newTodo, ...todos ]})
  }

  render() {
    const { todos } = this.state
    // const todos = this.state.todos
    return(
      <>
        <TodoForm addTodo={this.addTodo} />
        <List todos={todos} todoListName='Learning' />
      </>
    )
  }
}

export default App;