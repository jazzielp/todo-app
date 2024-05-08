import { Filters } from './Filters'
import { Footer } from './Footer'
import { Form } from './Form'
import { ListTodo } from './ListTodo'

export function Main (): JSX.Element {
  return (
    <main className='main'>
      <Form />
      <ListTodo />
      <Filters />
      <Footer />
    </main>
  )
}
