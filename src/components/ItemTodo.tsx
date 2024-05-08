import { Cross } from './icons/Cross'
import { Todo } from '../types/types'
import { Check } from './icons/Check'
import { useTodo } from '../hooks/useTodo'

interface ItemTodoProps {
  todo: Todo
}

export function ItemTodo ({ todo }: ItemTodoProps): JSX.Element {
  const { id, title, completed } = todo
  const { todoCompleted, deleteTodo } = useTodo()
  const handleCommpleted = (id: string): void => {
    todoCompleted(id)
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  return (
    <div className='list-todo__item'>
      <div className='list-todo__info-container'>
        {completed
          ? (
            <div className='list-todo__icon-completed'>
              <Check />
            </div>
            )
          : (
            <div onClick={() => handleCommpleted(id)} className='list-todo__icon-check'>
              <div className='list-todo__icon-check-brackground' />
            </div>
            )}
        <p
          className={
            completed ? 'list-todo__todo-completed' : 'list-todo__todo'
          }
        >
          {title}
        </p>
      </div>
      <button onClick={(): void => handleDelete(id)}>
        <Cross size={12} />
      </button>
    </div>
  )
}
