import { createContext, useState, ReactNode } from 'react'
import { Theme } from '../types/types'

interface TodoProviderProps {
  children: ReactNode
}

interface ContextValue {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const TodoContext = createContext<undefined | ContextValue>(undefined)

export function TodoProvider ({ children }: TodoProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('Light')
  return (
    <TodoContext.Provider value={{ theme, setTheme }}>
      {children}
    </TodoContext.Provider>
  )
}
