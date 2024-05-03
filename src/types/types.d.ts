import { theme } from '../const/const'
export type Theme = typeof theme[keyof typeof theme]
