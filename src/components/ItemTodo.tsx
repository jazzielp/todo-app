import { DragEvent, useState } from 'react'
import { Cross } from './icons/Cross'
import { Todo } from '../types/types'
import { Check } from './icons/Check'
import { useTodo } from '../hooks/useTodo'

import { InputTodo } from './InputTodo'

interface ItemTodoProps {
  todo: Todo
}

export function ItemTodo ({ todo }: ItemTodoProps): JSX.Element {
  const { id, title, completed } = todo
  const context = useTodo()
  if (context === undefined) {
    throw new Error('ItemTodo must be used within a TodoProvider')
  }
  const { todoCompleted, deleteTodo, todos, setTodos } = context
  const [edit, setEdit] = useState<boolean>(false)
  const handleCommpleted = (id: string): void => {
    todoCompleted(id)
  }

  const handleDelete = (id: string): void => {
    deleteTodo(id)
  }

  const startDarg = (event: DragEvent<HTMLDivElement>, todo: Todo): void => {
    event.dataTransfer.setData('todoID', todo.id)
  }

  const dragginOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
  }

  const onDrop = (event: DragEvent<HTMLDivElement>, todoReplace: Todo): void => {
    const todoID = event.dataTransfer.getData('todoID')
    const todoDrag = todos.find((todo: Todo) => todo.id === todoID)
    const todoDragIndex = todos.findIndex((todo: Todo) => todo.id === todoID)
    const todoReplaceIndex = todos.findIndex((todo: Todo) => todo.id === todoReplace.id)

    if (todoDrag === undefined || todoDragIndex === -1 || todoReplaceIndex === -1) {
      console.error('Todo not found')
      return
    }

    const newTodos = structuredClone(todos)
    newTodos[todoReplaceIndex] = todoDrag
    newTodos[todoDragIndex] = todoReplace
    setTodos(newTodos)
  }

  const handleDoblueClick = (): void => {
    if (!completed) {
      setEdit(true)
    }
  }

  return (
    <div
      className='list-todo__item'
      draggable
      onDragOver={dragginOver}
      onDragStart={event => startDarg(event, todo)}
      onDrop={event => onDrop(event, todo)}
    >
      <div className='list-todo__info-container'>
        {completed
          ? (
            <div
              onClick={() => handleCommpleted(id)}
              className='list-todo__icon-completed'
            >
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
      <button className='list-todo__delete-button' onClick={(): void => handleDelete(id)}>
        <Cross size={12} />
      </button>
    </div>
  )
}
