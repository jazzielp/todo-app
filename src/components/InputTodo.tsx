import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState, MutableRefObject } from 'react'
import { useTodo } from '../hooks/useTodo'
interface Props {
  id: string
  title: string
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

type InputRef = MutableRefObject<HTMLInputElement | null>

export function InputTodo ({ id, title, setEdit }: Props): JSX.Element {
  const contex = useTodo()

  if (contex === undefined) {
    throw new Error('InputTodo must be used within a TodoProvider')
  }
  const { todos, setTodos } = contex
  const [textInput, setTextInput] = useState<string>(title)
  const inputRef: InputRef = useRef<HTMLInputElement | null>(null)

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextInput(e.target.value)
  }

  const handleOnBlur = (): void => {
    setEdit(false)
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].title = textInput
    // console.log(newTodos)
    setTodos(newTodos)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (inputRef.current != null) {
        inputRef.current.blur() // Quita el foco del input
      }
      handleOnBlur()
    }
  }

  useEffect(() => {
    if (inputRef.current != null) {
      // Enfocar el input
      inputRef.current.focus()
    }
  }, [])
  return (
    <input
      className='list-todo__input-todo'
      ref={inputRef} value={textInput}
      onChange={(e) => handleChangeTodo(e)}
      onBlur={() => handleOnBlur}
      onKeyDown={handleKeyDown}
    />
  )
}
