import { Navigate, Route, Routes } from 'react-router-dom'
import LanguageRoute from './routes/LanguageRoute'

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<LanguageRoute />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}

export default App
