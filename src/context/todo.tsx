import { createContext, useEffect, useState } from 'react'
import { ContextValue, Theme, TodoProviderProps, ListTodo, TypeFilter } from '../types/types'
import { FILTERS } from '../const/const'

export const TodoContext = createContext<undefined | ContextValue>(undefined)

export function TodoProvider ({ children }: TodoProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('Light')
  const [todos, setTodos] = useState<ListTodo>([])
  const [filtersTodos, setFiltersTodos] = useState<ListTodo>([])
  const [filter, setFilter] = useState<TypeFilter>(FILTERS.All)

  const todoCompleted = (id: string): void => {
    const index = todos.findIndex(todo => todo.id === id)
    const todoUpdate = structuredClone(todos)
    todoUpdate[index].completed = !todoUpdate[index].completed
    if (filter !== FILTERS.All) {
      filtersTodo(filter, todoUpdate)
    }
    setTodos(todoUpdate)
  }

  const cleanCompleteTodo = (): void => {
    const cleanTodo = todos.filter(todo => !todo.completed)
    setTodos(cleanTodo)
    if (filter !== FILTERS.All) {
      filtersTodo(filter, cleanTodo)
    }
  }

  const deleteTodo = (id: string): void => {
    const deletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodo)
    if (filter !== FILTERS.All) {
      filtersTodo(filter, deletedTodo)
    }
  }

  const filtersTodo = (filter: TypeFilter, todos: ListTodo): void => {
    if (filter === FILTERS.All) {
      setFiltersTodos([])
      setFilter(FILTERS.All)
    }
    if (filter === FILTERS.Active) {
      const filteredTodo = todos.filter(todo => !todo.completed)
      setFiltersTodos(filteredTodo)
      setFilter(FILTERS.Active)
    }
    if (filter === FILTERS.Completed) {
      const filteredTodo = todos.filter(todo => todo.completed)
      setFiltersTodos(filteredTodo)
      setFilter(FILTERS.Completed)
    }
  }

  useEffect(() => {
    const todosJSON = JSON.stringify(todos)
    localStorage.setItem('DATA_TODOS', todosJSON)
  }, [todos])

  const createTodo = (title: string): void => {
    if (title.length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false
      }
      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
      if (filter !== FILTERS.All) {
        filtersTodo(filter, newTodos)
      }
    }
  }
  return (
    <TodoContext.Provider value={
      {
        theme,
        setTheme,
        todos,
        setTodos,
        todoCompleted,
        cleanCompleteTodo,
        deleteTodo,
        createTodo,
        filtersTodo,
        filtersTodos,
        filter
      }
}
    >
      {children}
    </TodoContext.Provider>
  )
}
