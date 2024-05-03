import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import { ContextValue } from '../types/types'

export function useTodo (): ContextValue | undefined {
  const context = useContext(TodoContext)
  const { theme, setTheme } = context
  return { theme, setTheme }
}
