import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './context/todo.tsx'

const root = document.getElementById('root')

if (root != null) {
  ReactDOM.createRoot(root).render(
    <TodoProvider>
      <App />
    </TodoProvider>
  )
}
