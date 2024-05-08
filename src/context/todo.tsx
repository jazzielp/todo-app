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

  const deleteTodo = (id: string): void => {
    const deletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodo)
  }

  const createTodo = (title: string): void => {
    if (title.length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false
      }
      setTodos([
        ...todos,
        newTodo
      ])
    }
  }
  return (
    <TodoContext.Provider value={{ theme, setTheme, todos, setTodos, todoCompleted, cleanCompleteTodo, deleteTodo, createTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
