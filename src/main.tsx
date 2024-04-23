import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Design } from './design/Design.jsx'

const root = document.getElementById('root')

if (root != null) {
  ReactDOM.createRoot(root).render(
    <Design />
  )
}
