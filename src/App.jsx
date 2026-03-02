import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LanguageRoute from './routes/LanguageRoute'

const FaqPage = lazy(() => import('./pages/FaqPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-hidden>
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-softBrown/30 border-t-softBrown" />
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/:lang" element={<LanguageRoute />} />
        <Route path="/:lang/faq" element={<FaqPage />} />
        <Route path="/:lang/gallery" element={<GalleryPage />} />
        <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
        <Route path="/:lang/terms" element={<TermsOfUse />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
