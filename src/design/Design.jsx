import React from 'react'
import { Moon } from '../components/icons/Moon'
import { Cross } from '../components/icons/Cross'
import { Check } from '../components/icons/Check'

export function Design () {
  return (
    <div className='app'>
      <header className='header'>
        <img src='../../public/TODO 2.png' alt='Icon TODO' className='header__title' />
        <Moon />
      </header>
      <main className='main'>
        <form className='new-todo'>
          <div className='list-todo__icon' />
          <input
            name='todoInput'
            className='new-todo__input' type='text'
            name='create-todo'
            placeholder='Create a new todo...'
          />
        </form>
        <div className='list-todo'>
          <div className='list-todo__item'>
            <div className='list-todo__info-container'>
              <div className='list-todo__icon-check'>
                <div className='list-todo__icon-check-brackground' />
              </div>
              <p className='list-todo__todo'>Reunión a las 5</p>
            </div>
            <button>
              <Cross size={12} />
            </button>
          </div>
          {/* --- */}
          <div className='list-todo__item'>
            <div className='list-todo__info-container'>
              <div className='list-todo__icon-completed'>
                <Check />
              </div>
              <p className='list-todo__todo-completed '>Reunión a las 5</p>
            </div>
            <button>
              <Cross size={12} />
            </button>
          </div>

          <div className='list-todo__actions'>
            <p className='list-todo__count-todo'>5 items left</p>
            <div className='list-todo__filters'>
              <a href='#' className='list-todo-filter'>All</a>
              <a href='#' className='list-todo-filter'>Active</a>
              <a href='#' className='list-todo-filter'>Completed</a>
            </div>
            <button className='list-todo__clear-container'>
              Clear Completed
            </button>
          </div>
        </div>
        <div className='list-todo__filters-moviel'>
          <a href='#' className='filters-movie-filter filters-movie-filter--active'>All</a>
          <a href='#' className='filters-movie-filter'>Active</a>
          <a href='#' className='filters-movie-filter'>Completed</a>
        </div>
      </main>
      <footer className='footer'>
        <h3 className='footer__text'>Drag and drop to reorder list</h3>
      </footer>
    </div>
  )
}
