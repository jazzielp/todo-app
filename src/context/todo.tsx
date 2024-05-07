import { createContext, useState } from 'react'
import { ContextValue, Theme, TodoProviderProps, ListTodo } from '../types/types'

export const TodoContext = createContext<undefined | ContextValue>(undefined)

export function TodoProvider ({ children }: TodoProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('Light')
  const [todos, setTodos] = useState<ListTodo>([])

  const todoCompleted = (id: string): void => {
    const index = todos.findIndex(todo => todo.id === id)
    const todoUpdate = structuredClone(todos)
    todoUpdate[index].completed = true
    setTodos(todoUpdate)
  }

  const cleanCompleteTodo = (): void => {
    const cleanTodo = todos.filter(todo => todo.completed)
    setTodos(cleanTodo)
  }
  return (
    <TodoContext.Provider value={{ theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
