import { THEME } from '../const/const'
import { ReactNode } from 'react'

export type Theme = typeof THEME[keyof typeof THEME]

export interface TodoProviderProps {
  children: ReactNode
}
export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListTodo = Todo[]

export interface ContextValue {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  todos: ListTodo
  setTodos: React.Dispatch<React.SetStateAction<ListTodo>>
  todoCompleted: (id: string) => void
  cleanCompleteTodo: () => void
}
