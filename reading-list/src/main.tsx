// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const roots = document.getElementById('root')
if (!roots) {
  throw new Error("root not found")
}
createRoot(roots).render(
  <App/>
)
