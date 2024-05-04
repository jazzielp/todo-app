import { FormEvent } from 'react'

export function Form (): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newTodo = formData.get('create-todo')
    console.log(newTodo)
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
