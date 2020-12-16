const Todo = ({ id, title, complete, changeComplete }) => (
  <li
    style={ complete ? { ...styles.complete} : null }
    onClick={() => changeComplete(id)}
  >
    {title}
  </li>
)

const styles = {
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

export default Todo;