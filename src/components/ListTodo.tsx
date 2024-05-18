import { useTodo } from '../hooks/useTodo'
import { ItemTodo } from './ItemTodo'
import { Todo } from '../types/types'
import { Actions } from './Actions'
import { FILTERS } from '../const/const'
export function ListTodo (): JSX.Element {
  const context = useTodo()
  if (context === undefined) {
    throw new Error('ListTodo must be used within a TodoProvider')
  }
  const { todos, filtersTodos, filter } = context
  return (
    <div className='list-todo'>

      {filter === FILTERS.All
        ? todos?.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
        : filtersTodos?.map((todo: Todo) => (
          <ItemTodo key={todo.id} todo={todo} />
        ))}
      <Actions />

    </div>
  )
}
