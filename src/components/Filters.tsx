export function Filters (): JSX.Element {
  return (
    <div className='list-todo__filters-moviel'>
      <button className='filters-movie-filter filters-movie-filter--active'>All</button>
      <button className='filters-movie-filter'>Active</button>
      <button className='filters-movie-filter'>Completed</button>
    </div>
  )
}
