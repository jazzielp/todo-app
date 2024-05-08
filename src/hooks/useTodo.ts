import { useContext, useEffect } from 'react'
import { TodoContext } from '../context/todo'
import { ContextValue } from '../types/types'

export function useTodo (): ContextValue | undefined {
  const context = useContext(TodoContext)
  const { theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo, deleteTodo, createTodo } = context

  return { theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo, deleteTodo, createTodo }
}
