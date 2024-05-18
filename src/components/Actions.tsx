import { FILTERS } from '../const/const'
import { useTodo } from '../hooks/useTodo'
import { TypeFilter } from '../types/types'

export function Actions (): JSX.Element {
  const context = useTodo()
  if (context === undefined) {
    throw new Error('Actions must be used within a TodoProvider')
  }
  const { todos, cleanCompleteTodo, filtersTodo, filter, filtersTodos } = context
  const handleCleanComplete = (): void => {
    cleanCompleteTodo()
  }
  const handleFilter = (filter: TypeFilter): void => {
    filtersTodo(filter, todos)
  }

  return (
    <div className='list-todo__actions'>
      <p className='list-todo__count-todo'>{filter === FILTERS.All ? todos.length : filtersTodos.length} items left</p>
      <div className='list-todo__filters'>
        <button onClick={() => handleFilter(FILTERS.All)} className={`list-todo-filter ${filter === FILTERS.All ? 'filters-movie-filter--active' : ''}`}>All</button>
        <button onClick={() => handleFilter(FILTERS.Active)} className={`list-todo-filter ${filter === FILTERS.Active ? 'filters-movie-filter--active' : ''}`}>Active</button>
        <button onClick={() => handleFilter(FILTERS.Completed)} className={`list-todo-filter ${filter === FILTERS.Completed ? 'filters-movie-filter--active' : ''}`}>Completed</button>
      </div>
      <button onClick={() => handleCleanComplete()} className='list-todo__clear-container'>
        Clear Completed
      </button>
    </div>
  )
}
