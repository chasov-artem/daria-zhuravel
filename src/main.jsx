import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppCanvas from './components/AppCanvas'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AppCanvas>
          <App />
        </AppCanvas>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
