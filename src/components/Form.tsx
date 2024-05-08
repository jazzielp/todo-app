import { FormEvent } from 'react'
import { useTodo } from '../hooks/useTodo'

export function Form (): JSX.Element {
  const { createTodo } = useTodo()
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newTodo = formData.get('create-todo')
    createTodo(newTodo)
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
