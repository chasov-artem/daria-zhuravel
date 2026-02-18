import { useContext } from 'react'
import { LanguageContext, SUPPORTED_LANGUAGES, translations } from './languageStore'

const fallbackDictionary = translations.en
const fallbackContext = {
  language: 'en',
  setLanguage: () => {},
  changeLanguage: () => {},
  supportedLanguages: SUPPORTED_LANGUAGES,
  t: (key) =>
    key.split('.').reduce((result, part) => {
      if (result && typeof result === 'object') {
        return result[part]
      }

      return key
    }, fallbackDictionary),
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    if (import.meta.env.DEV) {
      // Prevent app crash during rare HMR/context reload race conditions.
      console.warn('useLanguage was used outside LanguageProvider. Falling back to EN dictionary.')
    }
    return fallbackContext
  }

  return context
}
