import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useTodo } from '../hooks/useTodo'
interface Props {
  id: string
  title: string
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export function InputTodo ({ id, title, setEdit }: Props): JSX.Element {
  const { todos, setTodos } = useTodo()
  const [textInput, setTextInput] = useState<string>(title)
  const inputRef = useRef()

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.blur() // Quita el foco del input
    }
  }

  useEffect(() => {
    if (inputRef.current) {
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
