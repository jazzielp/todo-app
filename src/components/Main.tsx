import { useEffect } from 'react'
import { Filters } from './Filters'
import { Form } from './Form'
import { ListTodo } from './ListTodo'
import { useTodo } from '../hooks/useTodo'
import { arrayMove } from '@dnd-kit/sortable'
import { Todo } from '../types/types'

export function Main (): JSX.Element {
  const { todos, setTodos } = useTodo()
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('DATA_TODOS') || '[]')
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
