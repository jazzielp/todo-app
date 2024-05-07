import { useTodo } from '../hooks/useTodo'

export function Actions (): JSX.Element {
  const { todos } = useTodo()
  return (
    <div className='list-todo__actions'>
      <p className='list-todo__count-todo'>{todos.length} items left</p>
      <div className='list-todo__filters'>
        <a href='#' className='list-todo-filter'>All</a>
        <a href='#' className='list-todo-filter'>Active</a>
        <a href='#' className='list-todo-filter'>Completed</a>
      </div>
      <button className='list-todo__clear-container'>
        Clear Completed
      </button>
    </div>
  )
}
