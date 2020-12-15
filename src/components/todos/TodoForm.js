import { Component } from 'react';

class TodoForm extends Component {
  state = { title: '', complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state 
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          placeholder='Add a todo'
        />
        <input
          type='submit'
        />
      </form>
    )
  }
}

export default TodoForm;