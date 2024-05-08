import { useEffect } from 'react'
import { Filters } from './Filters'
import { Footer } from './Footer'
import { Form } from './Form'
import { ListTodo } from './ListTodo'
import { useTodo } from '../hooks/useTodo'

const mockTodos = [
  {
    id: 1,
    title: 'Tood 1',
    completed: false
  },
  {
    id: 2,
    title: 'Tood 2',
    completed: false
  },
  {
    id: 3,
    title: 'Tood 3',
    completed: true
  }
]

export function Main (): JSX.Element {
  const { setTodos } = useTodo()
  useEffect(() => {
    console.log('entra al use efect')
    const storageTodos = JSON.parse(localStorage.getItem('DATA_TODOS') || '[]')
    if (storageTodos.length > 0) {
      setTodos(storageTodos)
    } else {
      setTodos(mockTodos)
    }
  }, [])
  return (
    <main className='main'>
      <Form />
      <ListTodo />
      <Filters />
      <Footer />
    </main>
  )
}
