import { createContext, useState } from 'react'
import { ContextValue, Theme, TodoProviderProps } from '../types/types'

export const TodoContext = createContext<undefined | ContextValue>(undefined)

export function TodoProvider ({ children }: TodoProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('Light')
  return (
    <TodoContext.Provider value={{ theme, setTheme }}>
      {children}
    </TodoContext.Provider>
  )
}
