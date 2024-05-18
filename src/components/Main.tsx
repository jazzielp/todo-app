import { useEffect } from 'react'
import { Filters } from './Filters'
import { Form } from './Form'
import { ListTodo } from './ListTodo'
import { useTodo } from '../hooks/useTodo'
export function Main (): JSX.Element {
  const context = useTodo()

  if (context === undefined) {
    throw new Error('Main must be used within a TodoProvider')
  }
  const { setTodos } = context

  useEffect(() => {
    // const storageTodos = JSON.parse(localStorage.getItem('DATA_TODOS') || '[]')
    const storedTodos: string | null = localStorage.getItem('DATA_TODOS')
    const storageTodos = storedTodos !== null && storedTodos !== '' ? JSON.parse(storedTodos) : []
    setTodos(storageTodos)
  }, [])

  return (
    <main className='main'>
      <Form />
      <ListTodo />
      <Filters />
    </main>
  )
}
