import { useTodo } from '../hooks/useTodo'
import { Moon } from './icons/Moon'
import { Sun } from './icons/Sun'
import { THEME } from '../const/const'
import { Theme } from '../types/types'

export function Header (): JSX.Element {
  const context = useTodo()

  if (context === undefined) {
    throw new Error('Header must be used within a TodoProvider')
  }
  const { theme, setTheme } = context

  const handleTheme = (): void => {
    setTheme((preveState: Theme) => preveState === THEME.Light ? THEME.Dark : THEME.Light)
    const htmlElement = document.documentElement
    htmlElement.dataset.theme = theme
  }
  return (
    <header className='header'>
      <img src='TODO 2.png' alt='Icon TODO' className='header__title' />
      <div onClick={handleTheme} className='header__btn-mode'>
        {theme === 'Light' ? <Sun /> : <Moon />}
      </div>
    </header>
  )
}
