import { Moon } from './icons/Moon'

export function Header (): JSX.Element {
  return (
    <header className='header'>
      <img src='../../public/TODO 2.png' alt='Icon TODO' className='header__title' />
      <button className='header__btn-mode'>
        <Moon />
      </button>
    </header>
  )
}
