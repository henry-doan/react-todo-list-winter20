import { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/shared/Footer';

class App extends Component {
  state = { 
    todos: [
      { id: 1, title: "Learn Rails", complete: true },
      { id: 2, title: "Learn React", complete: false },
      { id: 3, title: "Learn Router", complete: false },
    ], 
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
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

  changeComplete = (id) => {
    const { todos } = this.state
    this.setState({ 
      todos: todos.map( t => {
        if (t.id === id) {
          return { ...t, complete: !t.complete }
        }
        return t
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t => t.complete )
      default:
        return todos
    }
  }

  render() {
    const { todos, filter } = this.state
    // const todos = this.state.todos
    return(
      <>
        <Footer filter={filter} setFilter={this.setFilter} />
        <TodoForm addTodo={this.addTodo} />
        <List todos={this.visibleItems()} todoListName='Learning' changeComplete={this.changeComplete} />
      </>
    )
  }
}

export default App;