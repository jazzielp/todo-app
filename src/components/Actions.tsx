import { useTodo } from '../hooks/useTodo'

export function Actions (): JSX.Element {
  const { todos, cleanCompleteTodo } = useTodo()
  const handleCleanComplete = (): void => {
    cleanCompleteTodo()
  }
  return (
    <div className='list-todo__actions'>
      <p className='list-todo__count-todo'>{todos.length} items left</p>
      <div className='list-todo__filters'>
        <button className='list-todo-filter'>All</button>
        <button className='list-todo-filter'>Active</button>
        <button className='list-todo-filter'>Completed</button>
      </div>
      <button onClick={() => handleCleanComplete()} className='list-todo__clear-container'>
        Clear Completed
      </button>
    </div>
  )
}
