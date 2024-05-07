import { useTodo } from '../hooks/useTodo'

export function Actions (): JSX.Element {
  const { todos } = useTodo()
  return (
    <div className='list-todo__actions'>
      <p className='list-todo__count-todo'>{todos.length} items left</p>
      <div className='list-todo__filters'>
        <button className='list-todo-filter'>All</button>
        <button className='list-todo-filter'>Active</button>
        <button className='list-todo-filter'>Completed</button>
      </div>
      <button className='list-todo__clear-container'>
        Clear Completed
      </button>
    </div>
  )
}
