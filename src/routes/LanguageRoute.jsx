import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import HomePage from '../pages/HomePage'

function LanguageRoute() {
  const { lang } = useParams()
  const { setLanguage, supportedLanguages } = useLanguage()

  const isSupportedLanguage = supportedLanguages.includes(lang)

  useEffect(() => {
    if (isSupportedLanguage) {
      setLanguage(lang)
    }
  }, [isSupportedLanguage, lang, setLanguage])

  if (!isSupportedLanguage) {
    return <Navigate to="/en" replace />
  }

  return <HomePage />
}

export default LanguageRoute
