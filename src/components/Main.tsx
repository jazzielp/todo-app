import { useEffect } from 'react'
import { Filters } from './Filters'
import { Form } from './Form'
import { ListTodo } from './ListTodo'
import { useTodo } from '../hooks/useTodo'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { Todo } from '../types/types'

const mockTodos = [
  {
    id: 1,
    title: 'Tood 1',
    completed: false
  },
  {
    id: 2,
    title: 'Tood 2',
    completed: false
  },
  {
    id: 3,
    title: 'Tood 3',
    completed: true
  }
]

export function Main (): JSX.Element {
  const { todos, setTodos } = useTodo()
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('DATA_TODOS') || '[]')
    setTodos(storageTodos)
  }, [])

  const handleDragEnd = (event: any): void => {
    const { active, over, activatorEvent } = event
    const classDiv = activatorEvent.target.className
    console.log(classDiv)
    console.log('entra')
    const oldIndex = todos.findIndex((todo: Todo) => todo.id === active.id)
    const newIndex = todos.findIndex((todo: Todo) => todo.id === over.id)
    const newTodos = arrayMove(todos, oldIndex, newIndex)
    setTodos(newTodos)
  }

  const handleCancelDrop = (event: any) => {
    const classDiv = event.activatorEvent.target.className
    console.log('entra')
    return classDiv === 'list-todo__icon-check-brackground'
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} cancelDrop={handleCancelDrop}>
      <main className='main'>
        <Form />
        <ListTodo />
        <Filters />
      </main>
    </DndContext>
  )
}
