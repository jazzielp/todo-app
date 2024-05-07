import { useTodo } from '../hooks/useTodo'
import { ItemTodo } from './ItemTodo'
import { Todo } from '../types/types'
import { Actions } from './Actions'
export function ListTodo (): JSX.Element {
  const { todos } = useTodo()
  return (
    <div className='list-todo'>
      {
        todos && todos.map((todo: Todo) => <ItemTodo key={todo.id} todo={todo} />)
      }
      <Actions />
    </div>
  )
}
