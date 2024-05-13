import { Cross } from './icons/Cross'
import { Todo } from '../types/types'
import { Check } from './icons/Check'
import { useTodo } from '../hooks/useTodo'
import { useState } from 'react'
import { InputTodo } from './InputTodo'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface ItemTodoProps {
  todo: Todo
}

export function ItemTodo ({ todo }: ItemTodoProps): JSX.Element {
  const { id, title, completed } = todo
  const [edit, setEdit] = useState<boolean>(false)
  const { todoCompleted, deleteTodo } = useTodo()
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const handleCommpleted = (id: string): void => {
    todoCompleted(id)
  }

  const handleDelete = (id: string): void => {
    deleteTodo(id)
  }

  const handleDoblueClick = (): void => {
    if (!completed) {
      setEdit(true)
    }
  }

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div style={style} {...attributes} {...listeners} ref={setNodeRef} className='list-todo__item'>
      <div className='list-todo__info-container'>
        {completed
          ? (
            <div className='list-todo__icon-completed'>
              <Check />
            </div>
            )
          : (
            <div
              onClick={() => handleCommpleted(id)}
              className='list-todo__icon-check'
            >
              <div className='list-todo__icon-check-brackground' />
            </div>
            )}
        {edit
          ? (
            <InputTodo id={id} title={title} setEdit={setEdit} />
            )
          : (
            <p
              className={
              completed ? 'list-todo__todo-completed' : 'list-todo__todo'
            }
              onDoubleClick={() => handleDoblueClick()}
            >
              {title}
            </p>
            )}
      </div>
      <button onClick={(): void => handleDelete(id)}>
        <Cross size={12} />
      </button>
    </div>
  )
}
