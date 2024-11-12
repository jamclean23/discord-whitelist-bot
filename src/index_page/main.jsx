import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IndexPage from './IndexPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
)