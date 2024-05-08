import { useTodo } from '../hooks/useTodo'
import { ItemTodo } from './ItemTodo'
import { Todo } from '../types/types'
import { Actions } from './Actions'
import { FILTERS } from '../const/const'
export function ListTodo (): JSX.Element {
  const { todos, filtersTodos, filter } = useTodo()

  return (
    <div className='list-todo'>
      {
        filter === FILTERS.All
          ? todos && todos.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
          : filtersTodos && filtersTodos.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
      }
      <Actions />
    </div>
  )
}
