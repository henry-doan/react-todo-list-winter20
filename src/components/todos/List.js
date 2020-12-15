const List = ({ todoListName, todos }) => (
  <>
    <h1>{todoListName}</h1>
    <ul>
      { todos.map( t => <li key={t.id}>{t.title}</li>)}
    </ul>
  </>
)

export default List;