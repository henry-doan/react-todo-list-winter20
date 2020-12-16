import Todo from './Todo';

const List = ({ todoListName, todos, changeComplete }) => (
  <>
    <h1>{todoListName}</h1>
    <ul>
      {/* { todos.map( t => <Todo key={t.id} id={t.id} title={t.title} complete={t.complete} />)} */}
      { todos.map( t => <Todo key={t.id} {...t} changeComplete={changeComplete} />)}
    </ul>
  </>
)

export default List;