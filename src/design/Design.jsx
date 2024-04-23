import React from 'react'
import { Moon } from '../components/icons/Moon'
import { Cross } from '../components/icons/Cross'

export function Design () {
  return (
    <div className='app'>
      <header className='header'>
        <h1 className='header__title'>TODO</h1>
        <Moon />
      </header>
      <main className='main'>
        <div className='new-todo'>
          <input className='new-todo__input' type='text' name='create-todo' />
        </div>
        <div className='list-todo'>
          <div className='list-todo__item'>
            <div className='list-todo__info-container'>
              <div className='list-todo__icon-' />
              <p className='list-todo__todo'>Reunión a las 5</p>
            </div>
            <Cross />
          </div>
          <div className='list-todo__actions'>
            <p className='list-todo__count-todo'>5 items left</p>
            <div className='list-todo__filters'>
              <a href='#' className='list-todo-filter'>All</a>
              <a href='#' className='list-todo-filter'>Active</a>
              <a href='#' className='list-todo-filter'>Completed</a>
            </div>
            <div className='list-todo__clear-container'>
              <a href='#' className='list-todo__clear-completed'>Clear Completed</a>
            </div>
          </div>
        </div>
        <div className='list-todo__filters-moviel'>
          <a href='#' className='filters-movie-filter'>All</a>
          <a href='#' className='filters-movie-filter'>Active</a>
          <a href='#' className='filters-movie-filter'>Completed</a>
        </div>
      </main>
      <footer className='footer'>
        <h3>Drag and drop to reorder list</h3>
      </footer>
    </div>
  )
}
