import { Navigate, Route, Routes } from 'react-router-dom'
import LanguageRoute from './routes/LanguageRoute'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import FaqPage from './pages/FaqPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<LanguageRoute />} />
      <Route path="/:lang/faq" element={<FaqPage />} />
      <Route path="/:lang/gallery" element={<GalleryPage />} />
      <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
      <Route path="/:lang/terms" element={<TermsOfUse />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}

export default App
