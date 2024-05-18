import { FormEvent } from 'react'
import { useTodo } from '../hooks/useTodo'

export function Form (): JSX.Element {
  const context = useTodo()
  if (context === undefined) {
    throw new Error('Form must be used within a TodoProvider')
  }
  const { createTodo } = context

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newTodo = formData.get('create-todo')
    if (typeof newTodo === 'string' && newTodo.trim().length > 0) {
      createTodo(newTodo)
    } else {
      console.error('Invalid todo')
    }

    const inputElement = event.currentTarget.querySelector('input[name="create-todo"]') as HTMLInputElement
    if (inputElement instanceof HTMLInputElement) {
      inputElement.value = '' // Establecer el valor del input en una cadena vacía
    }
  }
  return (
    <form onSubmit={event => handleSubmit(event)} className='new-todo'>
      <div className='list-todo__icon' />
      <input
        className='new-todo__input' type='text' name='create-todo'
        placeholder='Create a new todo...'
      />
    </form>
  )
}
