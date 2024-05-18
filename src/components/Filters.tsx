import { FILTERS } from '../const/const'
import { useTodo } from '../hooks/useTodo'
import { TypeFilter } from '../types/types'
export function Filters (): JSX.Element {
  const context = useTodo()
  if (context === undefined) {
    throw new Error('Filters must be used within a TodoProvider')
  }
  const { todos, filtersTodo, filter } = context
  const handleFilter = (filter: TypeFilter): void => {
    filtersTodo(filter, todos)
  }

  return (
    <div className='list-todo__filters-moviel'>
      <button onClick={() => handleFilter(FILTERS.All)} className={`filters-movie-filter ${filter === FILTERS.All ? 'filters-movie-filter--active' : ''}`}>All</button>
      <button onClick={() => handleFilter(FILTERS.Active)} className={`filters-movie-filter ${filter === FILTERS.Active ? 'filters-movie-filter--active' : ''}`}>Active</button>
      <button onClick={() => handleFilter(FILTERS.Completed)} className={`filters-movie-filter ${filter === FILTERS.Completed ? 'filters-movie-filter--active' : ''}`}>Completed</button>
    </div>
  )
}
