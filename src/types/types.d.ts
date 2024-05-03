import { THEME } from '../const/const'
import { ReactNode } from 'react'

export type Theme = typeof THEME[keyof typeof THEME]

export interface TodoProviderProps {
  children: ReactNode
}

export interface ContextValue {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}
