import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import { ContextValue } from '../types/types'

export function useTodo (): ContextValue | undefined {
  const context = useContext(TodoContext)
  const { theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo, deleteTodo, createTodo, filtersTodo, filtersTodos, filter } = context

  return { theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo, deleteTodo, createTodo, filtersTodo, filtersTodos, filter }
}
