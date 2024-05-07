import { useContext, useEffect } from 'react'
import { TodoContext } from '../context/todo'
import { ContextValue } from '../types/types'
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

export function useTodo (): ContextValue | undefined {
  const context = useContext(TodoContext)
  const { theme, setTheme, todos, setTodos, todoCompleted } = context
  useEffect(() => {
    const storageTodos = localStorage.getItem('DATA_TODOS') || mockTodos
    setTodos(storageTodos)
  }, [])

  return { theme, setTheme, todos, setTodos, todoCompleted }
}
