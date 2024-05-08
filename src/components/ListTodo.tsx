import { useTodo } from '../hooks/useTodo'
import { ItemTodo } from './ItemTodo'
import { Todo } from '../types/types'
import { Actions } from './Actions'
export function ListTodo (): JSX.Element {
  const { todos, filtersTodos } = useTodo()
  return (
    <div className='list-todo'>
      {
        filtersTodos?.length > 0
          ? filtersTodos && filtersTodos.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
          : todos && todos.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
      }
      <Actions />
    </div>
  )
}
